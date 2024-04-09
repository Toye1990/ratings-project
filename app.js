const mainContainer = document.querySelector('.first-container')
const thanksContainer = document.querySelector('.all-container')
const buttons = document.querySelectorAll('.figures')
const ratins = document.querySelector('#ratings')
const submitButton = document.getElementById('submitMe')
const rateNow = document.getElementById('submitMe2')


//add click event on submit button
submitButton.addEventListener('click', () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = 'none'
})

rateNow.addEventListener('click', () =>{
    thanksContainer.classList.add('hidden')
    mainContainer.style.display = 'block'
})


buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
       ratins.innerHTML = button.innerHTML
    })
})