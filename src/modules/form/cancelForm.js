import { containerFull, divButtonSchedule, divSchedule } from "./openForm.js"
const time = document.getElementById("time")
const service = document.getElementById("service")
const phone = document.getElementById("phone")
const namePet = document.getElementById("name-pet")
const namePerson = document.getElementById("name")
const close = document.querySelector(".schedule > img")

if (close) {

    // recuperando evento de click no x do form
    close.addEventListener("click", (event) => {
    event.preventDefault();
       const resposta = confirm("Deseja fechar a aba de novo agendamento?")

        if (resposta) {
            // Fechando form
            containerFull.style.filter = 'none';
            divButtonSchedule.style = "display:flex";
            divSchedule.style = "display:none"

        time.value = ""
        service.value = ""
        phone.value = ""
        namePet.value = ""
        namePerson.value = ""

        }
        else {
            alert("Operação cancelada!")
        }
    })
}