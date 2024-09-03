  const switchArea = document.querySelector("#switch")
  const labelButton = document.querySelector(".dark-mode")

  const buttonClass = document.querySelector(".toogle-on-btn")
  const spanClass = document.querySelector(".toogle-on-span")

  switchArea.addEventListener("click", () => {

  if(labelButton.textContent === "Escuro"){
    labelButton.textContent = "Claro"
  }else{
    labelButton.textContent = "Escuro"
  }

    buttonClass.classList.toggle("toogle-on-btn")
    spanClass.classList.toggle("toogle-on-span")
  })

