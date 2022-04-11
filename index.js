const buttons = document.querySelectorAll('button')

// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.preventDefault
//         button.classList.toggle('selected')
//     })
// })

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault
        if (button.ariaSelected === 'true'){
            button.ariaSelected = 'false'
        }
        else {
            button.ariaSelected = 'true'
        }
    })
})