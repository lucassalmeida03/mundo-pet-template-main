import dayjs from "dayjs";
// Recuperando button novo agendamento para o click
const newSchedule = document.getElementById("newSchedule");
export const containerFull = document.querySelector(".container");
export const divButtonSchedule = document.querySelector(".final-button");
export const divSchedule = document.querySelector(".schedule");
const namePet = document.getElementById("name-pet")
const namePerson = document.getElementById("name")
const phone = document.getElementById("phone")
const service = document.getElementById("service")
const dateApp = document.getElementById("date")
// Recupera o input de data do form
const dateForm = document.getElementById("dateform")

// data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// adiciona data atual e formata a mesma
dateApp.value = inputToday
// bloqueia entrada de datas do passado.
dateApp.min = inputToday

// adicionando evento de click no botao novo agendamento
newSchedule.addEventListener("click", (event) => {
    event.preventDefault();

    // Carrega o form para novo agendamento
    containerFull.style.filter = 'blur(.25rem)';
    divButtonSchedule.style = "display:none";
    divSchedule.style = "display:flex"

    // adiciona data atual e formata a mesma
    dateForm.value = inputToday
    // bloqueia entrada de datas do passado.
    dateForm.min = inputToday

    // Regex para os inputs

    namePet.addEventListener('input', () => {
        namePet.value = namePet.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    });

     service.addEventListener('input', () => {
        service.value = service.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    });

    phone.addEventListener("input", () => {
        phone.value = phone.value.replace(/[^0-9()\s-]/g, '');
    });

    namePerson.addEventListener('input', () => {
        namePerson.value = namePerson.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    });


})