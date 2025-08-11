import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
dayjs.extend(utc)
dayjs.extend(timezone)
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
const selectedDate = document.getElementById("date")
const container = document.querySelector(".periods")
const time = document.getElementById("time")
const [selectedHour] = time.value.split(":")

document.addEventListener("DOMContentLoaded", async () => {

    const date = dayjs(selectedDate.value).add(selectedHour, "hour").tz("America/Sao_Paulo").format()
    await scheduleFetchByDay({ date })

})

selectedDate.addEventListener("change", async () => {
   
    container.innerHTML = ""
    const date = dayjs(selectedDate.value).add(selectedHour, "hour").tz("America/Sao_Paulo").format() // Aplicando fuso
    await scheduleFetchByDay({ date })
    
})



