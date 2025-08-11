import { setMinTime } from "./submit.js"
import dayjs from "dayjs"
const dateForm = document.getElementById("dateform")

dateForm.onchange = () => {
    const today = dayjs().format("YYYY-MM-DD")
    const when = dayjs(dateForm.value).format("YYYY-MM-DD")

    if (when === today) {
        setMinTime(new Date().getHours())
    }

    else {
        setMinTime(0)
    }
}

