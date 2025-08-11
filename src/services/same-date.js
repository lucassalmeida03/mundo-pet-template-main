import { apiConfig } from "./api-config.js"


export async function sameDate(dating) {
    const response = await fetch(`${apiConfig.baseURL}/schedules`);
    const data = await response.json();

    const existSchedules = data.some((schedule) => schedule.when === dating);

    return existSchedules;
}