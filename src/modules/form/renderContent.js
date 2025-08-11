
const periods = document.querySelector(".periods");

export function renderContent({name, petName, serviceName, totalTime, id}) {
  try {
    const li = document.createElement("li");
    const divPeriod = document.createElement("div");
    const divInformations = document.createElement("div");
    const divPeopleInfo = document.createElement("div");
    const img = document.createElement("img");
    const label1 = document.createElement("label");
    const label2 = document.createElement("label");
    const label3 = document.createElement("label");
    const label4 = document.createElement("label");
    const strong = document.createElement("strong");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p2.id = "remover-agendamento";

    // Conteúdo do agendamento
    label3.classList.add("label-large-font");
    label3.textContent = totalTime;
    label4.classList.add("label-small-font");
    label4.textContent = `${petName} `;
    strong.classList.add("paragraph-small-font");
    strong.textContent = `/ ${name}`;
    p1.classList.add("paragraph-small-font");
    p1.textContent = serviceName;
    p2.classList.add("paragraph-small-font");
    p2.textContent = "Remover agendamento";

    label4.append(strong);
    divPeopleInfo.append(label3, label4);
    divInformations.classList.add("informations");
    divInformations.setAttribute("data-id", id);
    divPeopleInfo.classList.add("people-information");
    divInformations.append(divPeopleInfo, p1, p2);

    // Definição de período
    let classPeriod = "";
    if (totalTime <= "12:00") {
      classPeriod = "period-morning";
      divPeriod.classList.add("top-morning");
      img.setAttribute("src", "assets/Sun-Fog--Streamline-Solar.svg");
      img.setAttribute("alt", "morning");
      label1.textContent = "Manhã";
      label2.textContent = "09h-12h";
    } else if (totalTime <= "18:00") {
      classPeriod = "period-afternoon";
      divPeriod.classList.add("top-afternoon");
      img.setAttribute("src", "assets/Cloud-Sun-4--Streamline-Solar.svg");
      img.setAttribute("alt", "afternoon");
      label1.textContent = "Tarde";
      label2.textContent = "13h-18h";
    } else {
      classPeriod = "period-night";
      divPeriod.classList.add("top-night");
      img.setAttribute("src", "assets/Moon-Stars--Streamline-Solar.svg");
      img.setAttribute("alt", "night");
      label1.textContent = "Noite";
      label2.textContent = "19h-21h";
    }

    li.classList.add(classPeriod);
    label1.classList.add("label-large-font");
    label2.classList.add("label-large-font");
    divPeriod.append(img, label1, label2);
    li.append(divPeriod, divInformations);

    // Verifica se já existe uma <li> com essa classe
    const existingLi = periods.querySelector(`.${classPeriod}`);
    if (existingLi) {
      // Só adiciona os novos elementos dentro da <li> já existente
      existingLi.append(divInformations);
    } else {
      // Define posição correta: manhã → tarde → noite
      const allLis = periods.querySelectorAll("li");
      let inserted = false;

      for (const existing of allLis) {
        if (
          (classPeriod === "period-morning" &&
            (existing.classList.contains("period-afternoon") ||
              existing.classList.contains("period-night"))) ||
          (classPeriod === "period-afternoon" &&
            existing.classList.contains("period-night"))
        ) {
          periods.insertBefore(li, existing);
          inserted = true;
          break;
        }
      }

      if (!inserted) {
        periods.append(li); // Último caso: insere no final
      }
    }
  } catch (error) {
    console.log(error);
  }
}
