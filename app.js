const mainContainer = document.querySelector('.first-container')
const thanksContainer = document.querySelector('.all-container')
const buttons = document.querySelectorAll('.figures')
const ratins = document.querySelector('#ratings')
const submitButton = document.getElementById('submitMe')
const rateNow = document.getElementById('submitMe2')
const button2 = document.querySelector('.figures2')
const button3 = document.querySelector('.figures3')
const button4 = document.querySelector('.figures4')
const button5 = document.querySelector('.figures5')
const button1 = document.querySelector('.figures1')


//add click event on submit button
/*const showNow = () =>{
    submitButton.addEventListener('click', () =>{
        thanksContainer.classList.remove("hidden")
        mainContainer.style.display = 'none'
})
}*/

//const showDisplay = showNow()

let clicked = false
const showNow = (event) =>{
    event.preventDefault()
if(clicked === false){
    return
}
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = 'none'
}

submitButton.addEventListener('click', showNow)


rateNow.addEventListener('click', () =>{
    thanksContainer.classList.add('hidden')
    mainContainer.style.display = 'block'
})


const buttonMart = () =>{
    buttons.forEach((button) =>{
        button.addEventListener('click', () =>{
         clicked = true
           ratins.innerHTML = button.innerHTML
        })
    })
}

const buttonTrue = buttonMart()

/*if (showDisplay == buttonTrue) {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = 'none'
}else{
   return;
}*/


button1.addEventListener('click', () =>{
button1.style.backgroundColor = 'gray'
if (button1.style.backgroundColor == 'gray') {
 button2.style.backgroundColor =''
 button3.style.backgroundColor =''
 button4.style.backgroundColor =''
 button5.style.backgroundColor =''
}
})

button2.addEventListener('click', () =>{
    button2.style.backgroundColor = 'gray'
    if (button2.style.backgroundColor == 'gray') {
     button1.style.backgroundColor =''
     button3.style.backgroundColor =''
     button4.style.backgroundColor =''
     button5.style.backgroundColor =''
    }
    })

button3.addEventListener('click', () =>{
        button3.style.backgroundColor = 'gray'
        if (button3.style.backgroundColor == 'gray') {
         button1.style.backgroundColor =''
         button2.style.backgroundColor =''
         button4.style.backgroundColor =''
         button5.style.backgroundColor =''
    }
 })
    

 button4.addEventListener('click', () =>{
    button4.style.backgroundColor = 'gray'
    if (button4.style.backgroundColor == 'gray') {
     button1.style.backgroundColor =''
     button2.style.backgroundColor =''
     button3.style.backgroundColor =''
     button5.style.backgroundColor =''
}
})

button5.addEventListener('click', () =>{
    button5.style.backgroundColor = 'gray'
    if (button5.style.backgroundColor == 'gray') {
     button1.style.backgroundColor =''
     button2.style.backgroundColor =''
     button3.style.backgroundColor =''
     button4.style.backgroundColor =''
}
})


 

