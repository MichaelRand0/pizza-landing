const nameInput = document.querySelector("[data-input='name']")
const adressInput = document.querySelector("[data-input='adress']")
const phoneInput = document.querySelector("[data-input='phone']")
const form = document.getElementById("form")
const modal = document.getElementById("modal")
const burgerBtn = document.getElementById('burger_btn')
const burgerMenu = document.getElementById('burger_menu')
const picture = document.getElementById('picture')
const pictureImg = picture.querySelector('.picture__img')
const pictureTitle = picture.querySelector('.picture__title')
const pizzaBtns = document.querySelectorAll('.shop__img-btn')

picture.addEventListener('click', e => e.target.classList.remove('picture_active'))

pizzaBtns.forEach(pizza => {
  pizza.addEventListener('click', (e) => {
    const title = pizza.closest('.shop__info').querySelector('.shop__subtitle').textContent
    const img = pizza.querySelector('.shop__img').getAttribute('src')
    pictureImg.setAttribute('src', img)
    pictureTitle.textContent = title
    picture.classList.add('picture_active')
  })
})

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger_active')
  burgerMenu.classList.toggle('header__nav-mobile_active')
})

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
