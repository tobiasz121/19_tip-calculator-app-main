const buttons = document.querySelectorAll('button')
const custm = document.querySelector('input.tip-btn')
//Go through each button, if button was active, after click make it inactive
//Styling is applied throuh css and attribute selector. Each button with ariaselected = 'true' has some 
//styling applied

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault        
        if (button.ariaSelected === 'true'){
            button.ariaSelected = 'false'
            
        }
        else {
            //If clicked button was inactive, first make sure that all other button are inactive,
            //and then make current target active.
            buttons.forEach(button => {
                button.ariaSelected = 'false'
            })
            button.ariaSelected = 'true'
            custm.value = ''

        }
    })
})