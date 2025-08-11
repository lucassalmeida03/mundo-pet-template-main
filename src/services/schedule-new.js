import {apiConfig} from "./api-config.js"

export async function newSchedule({id, name, petName, serviceName, when, totalTime}) {
 try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, name, petName, serviceName, when, totalTime})
    })
 } catch (error) {
    console.log(error)
    alert("Não foi possível agendar, tente novamente mais tarde!")
 }


}