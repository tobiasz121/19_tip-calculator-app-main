const buttons1 = document.querySelectorAll('button.tip-btn')
const personTotal = document.querySelector('#total-person')
const personTip = document.querySelector('#tip-person')
const custombtn = document.querySelector('input.tip-btn') 

const totals = (bill, tip, people = 1) => {
    
    personTotal.textContent = `$${(bill/people).toFixed(2)}`
    personTip.textContent = `$${(bill*(tip/100)/people).toFixed(2)}`
}

buttons1.forEach(button => {
    button.addEventListener('click', event => {
        document.querySelector('#bill').placeholder=''          
        const tip = Number(event.currentTarget.dataset.tip, 10)        
        const bill = Number( document.querySelector('#bill').value, 10)
        const people = Number(document.querySelector('#people').value, 10)
        if (bill === 0){            
            document.querySelector('#bill').placeholder = 'Insert Bill'
            button.ariaSelected = 'false'
        }
        if (people ===0 ){
            document.querySelector('#people').placeholder = 'Insert No of People'
            button.ariaSelected = 'false'
        }
        else {
            totals(bill, tip, people)
        }
        console.log(tip)
        console.log(bill)
        console.log(people)             
        
        
    })
})

custombtn.addEventListener('keyup', event => {
    buttons1.forEach(button => {
        button.ariaSelected = 'false'
    })
    totals()
})


