const formulary = document.querySelector('form')
let quantity = document.getElementById('quantity')

const convertSelect = document.getElementById('convert')
const toSelect = document.getElementById('to')

let result = 0

function Convert() {
    let meters = 1
    const input = document.getElementById('result')

    if (convertSelect.value === toSelect.value) {
        input.value = quantity.value + toSelect.value
    }

    switch(convertSelect.value) {
        case 'm':
            meters = quantity.value
        break;
        case 'km':
            meters = quantity.value * 1000
        break;
        case 'cm':
            meters = quantity.value / 100
        break;
        case 'mm':
            meters = quantity.value / 1000
        break;
    }

    switch(toSelect.value) {
        case 'm':
            result = meters
        break;
        case 'km':
            result = meters / 1000
        break;
        case 'cm':
            result = meters * 100
        break;
        case 'mm':
            result = meters * 1000
        break;
    }

    input.value = result + toSelect.value
   }

formulary.addEventListener('submit', (e) => {
    e.preventDefault()
    
    Convert()
})