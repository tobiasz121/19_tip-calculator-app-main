const buttons1 = document.querySelectorAll('button.tip-btn')
const personTotal = document.querySelector('#total-person')
const personTip = document.querySelector('#tip-person')
const custombtn = document.querySelector('input.tip-btn') 

//Totals function used to calculate correct tip and total for person.
//It takes current target parameter, and type of the target.
const totals = (curBtn, type) => {

    //Depending on the type, tip value is exctracted differently from dataset and value.
    //String is also converted to Number.
    document.querySelector('#bill').placeholder=''
    let tip = 0
    if (type === 'button'){
        tip = Number(curBtn.dataset.tip, 10)        
    }        
    else {
        tip = Number(curBtn.value, 10)          
    }  
    
    //Bill and people fields values, converted to numbers
    const bill = Number( document.querySelector('#bill').value, 10)
    const people = Number(document.querySelector('#people').value, 10)

    //Change placeholder values for the input fields, if they're empty. 
    //If they're empty change button state to inactive as well
    //if there are value, calculate the amounts and pass them to the correct html targets.
    if (bill === 0){            
        document.querySelector('#bill').placeholder = 'Insert Bill'
        curBtn.ariaSelected = 'false'
    }
    if (people ===0 ){
        document.querySelector('#people').placeholder = 'Insert No of People'
        curBtn.ariaSelected = 'false'
    }
    else  {
        personTotal.textContent = `$${(bill/people).toFixed(2)}`
        personTip.textContent = `$${(bill*(tip/100)/people).toFixed(2)}`
    }    
    
}

//Monitor each tip button, after click action on any given button, invoke totals function and pass current target as parameter.
//2nd parameter distingushes button from input, as data is taken differently from them (dataset vs value)
buttons1.forEach(button => {
    button.addEventListener('click', event => {
        const curBtn = event.currentTarget
        totals(curBtn, 'button')
    })
})        
       
//Monitor custom input, look for the keyup event.
//After keyup, disable all the other buttons and invoke totals function, passing current target, and type parameter.
custombtn.addEventListener('keyup', event => {
    buttons1.forEach(button => {
        button.ariaSelected = 'false'
    })
    const curBtn = event.currentTarget
    totals(curBtn, 'input')
})


