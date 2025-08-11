
import {removedById} from "../../services/removeSchedule.js"
const periods = document.querySelectorAll(".periods");

periods.forEach((period) => {

    period.addEventListener("click", async (event) => {

        if(event.target.id.includes("remover-agendamento")) {
            const item = event.target.closest("div")
            const {id} = item.dataset
            
            if(id) {
               const isConfirm = confirm("Tem certeza que deseja remover esse agendamento?")
            

            if(isConfirm) {
                await removedById({id})
                item.remove()
            }
        }
        }
    })
})