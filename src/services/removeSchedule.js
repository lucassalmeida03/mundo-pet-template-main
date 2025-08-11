import { apiConfig } from "./api-config.js";
export async function removedById({ id }) {

    try {
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE"
        })
    
        alert("Agendamento removido com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possível remover esse agendamento. Por favor, tente novamente mais tarde.")
    }



}