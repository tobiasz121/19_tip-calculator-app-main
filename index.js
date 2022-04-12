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
            buttons.forEach(button => {
                button.ariaSelected = 'false'
            })
            button.ariaSelected = 'true'
        }
    })
})