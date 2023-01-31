const scriptURL = 'https://script.google.com/macros/s/AKfycbwna70bMTWLPWckRg97-L7LAGg5OJMhyU6ffkitczo97d6uaBSzOfDJQDws33Qh6J13Qg/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML="Thanks, will connect soon!"
      setTimeout(function(){
          msg.innerHTML=""
      },5000)
      
    })
    .catch(error => console.error('Error!', error.message))
})
