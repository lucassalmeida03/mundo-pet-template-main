import dayjs from "dayjs"
import { renderContent } from "../modules/form/renderContent.js"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
    try {
        const container = document.querySelector(".periods")
        container.innerHTML = ""
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data = await response.json()
       
        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        )

        dailySchedules.forEach(schedule => {
            renderContent(schedule)
        })

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia. Por favor, tente novamente mais tarde.")
    }
}