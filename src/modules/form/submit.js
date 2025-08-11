import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc)
dayjs.extend(timezone)
import { containerFull, divButtonSchedule, divSchedule } from "./openForm.js"
import { sameDate } from "../../services/same-date.js"
import { newSchedule } from "../../services/schedule-new.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
const form = document.querySelector("form")
const dateForm = document.getElementById("dateform")
const time = document.getElementById("time")
const service = document.getElementById("service")
const phone = document.getElementById("phone")
const selectedDate = document.getElementById("date")
const namePet = document.getElementById("name-pet")
const namePerson = document.getElementById("name")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
dateForm.value = inputToday

let minTime = new Date().getHours()

export function setMinTime(value) {
    minTime = value;
}

form.onsubmit = async (event) => {
    event.preventDefault()
    const [selectedHour] = time.value.split(":")
  
    const dating = dayjs(dateForm.value).add(selectedHour, "hour").tz("America/Sao_Paulo").format()
    const existe = await sameDate(dating);

    try {
        
        // Validacoes antes do submit
        if (!time.value || !service.value.trim() || !phone.value.trim() || !namePet.value.trim() || !namePerson.value.trim()) {
            alert("defina todos os campos para prosseguir")
            return;
        }

        if (selectedHour < minTime) {
            alert("Por favor, adicione um horário válido!")
            return;
        }

        if(selectedHour > "21" || selectedHour < "09") {
            alert("Escolha um horário dentro da faixa de funcionamento para agendamento")
            return;
        }

        if (existe) {
            alert("Esse Horário e dia já estão agendados. Por favor. Faça um agendamento diferente.")
            return;
        }
        // Pegando o servico desejado
        const serviceName = service.value;

        // Pegando nome do cliente
        const name = namePerson.value

        // Pegando o nome do pet
        const petName = namePet.value

        const id = new Date().getTime().toString()

        // Pegando a data e hora selecionadas
        const when = dayjs(dateForm.value).add(selectedHour, "hour").tz("America/Sao_Paulo").format() // Aplicando fuso

        const baseTime = dayjs().hour(Number(selectedHour)).minute(Number(0))
        const totalTime = baseTime.format("HH:mm")
        const date = dayjs(selectedDate.value).add(selectedHour, "hour").tz("America/Sao_Paulo").format()  // Aplicando fuso

        await newSchedule({ id, name, petName, serviceName, when, totalTime })
        await scheduleFetchByDay({ date })

        alert("Agendamento concluído com sucesso!")

        containerFull.style.filter = 'none';
        divButtonSchedule.style = "display:flex";
        divSchedule.style = "display:none"

        time.value = ""
        service.value = ""
        phone.value = ""
        namePet.value = ""
        namePerson.value = ""


    } catch (error) {
        console.log(error)
        alert("Algo deu errado, por favor, tente novamente mais tarde.")
    }

}