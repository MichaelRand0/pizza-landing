const nameInput = document.querySelector("[data-input='name']")
const adressInput = document.querySelector("[data-input='adress']")
const phoneInput = document.querySelector("[data-input='phone']")
const form = document.getElementById("form")
const modal = document.getElementById("modal")

modal.addEventListener("click", () => {
  modal.classList.remove("modal_active")
})

const fakeAjaxRequest = async (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        status: "success",
        data,
      }
      resolve(response)
    }, 2000)
  })
}

const onSubmit = async () => {
  const nameValue = nameInput.value
  const adressValue = adressInput.value
  const phoneValue = phoneInput.value
  const data = JSON.stringify({
    title: nameValue,
    text: adressValue,
    userId: phoneValue,
  })
  const response = await fakeAjaxRequest(data)
  if(response.status === 'success') {
    nameInput.value = ''
    adressInput.value = ''
    phoneInput.value = ''
    modal.classList.add("modal_active")
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  onSubmit()
})

nameInput.addEventListener("input", (event) => {
  if (event.target.value.split("").includes(".")) {
    event.target.value = event.target.value.replace(".", "")
  }
})
