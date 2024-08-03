let from = document.getElementById('from'),
fromFlag=document.getElementById('fromFlag');
let to= document.getElementById('to'),
toFlag = document.getElementById('toFlag')

from.addEventListener('change', () => {
let fromSelect=from.value



    switch(fromSelect){
        case 'USD':
            
            fromFlag.style.background="var(--USD)"
    break;
        case 'BRL':
            fromFlag.style.background="var(--BRL)"
            break;
        case 'EUR':
            fromFlag.style.background="var(--EUR)"
            break;
        case 'GBP':
            fromFlag.style.background="var(--GBP)"
            break;
        default:
            fromFlag.style.background="var(--BRL)"

        }
    }
)

 to.addEventListener('change',() => {
let toSelect = to.value

switch(toSelect){
    case 'USD':
        
        toFlag.style.background="var(--USD)"
break;
    case 'BRL':
        toFlag.style.background="var(--BRL)"
        break;
    case 'EUR':
        toFlag.style.background="var(--EUR)"
        break;
    case 'GBP':
        toFlag.style.background="var(--GBP)"
        break;
    default:
        toFlag.style.background="var(--USD)"

}

 })

const replaceButton =document.getElementById('replaceButton')

replaceButton.classList.add("rotate");

replaceButton.addEventListener("click", () => {
 

  if (replaceButton.classList.contains("rotate")) {
    replaceButton.classList.remove("rotate");
    replaceButton.classList.add("rotate-more");
  } else {
    replaceButton.classList.add("rotate");
    replaceButton.classList.remove("rotate-more");
  }
});

replaceButton.addEventListener("click", () => {

const toCurrencyInput= document.getElementById('toCurrencyInput')
const fromCurrencyInput =document.getElementById('fromCurrencyInput')
 
 const fromValue=from.value
 from.value=to.value
 to.value= fromValue
 fromCurrencyInput.value=toCurrencyInput.value 
 
 updateFrom(from.value,fromFlag)
 updateTo(to.value,toFlag)

});


function updateFrom(inputFrom,imgFrom){

    switch(inputFrom){
        case 'USD':
            
            imgFrom.style.background="var(--USD)"
    break;
        case 'BRL':
            imgFrom.style.background="var(--BRL)"
            break;
        case 'EUR':
            imgFrom.style.background="var(--EUR)"
            break;
        case 'GBP':
            ImgFrom.style.background="var(--GBP)"
            break;
        default:
            ImgFrom.style.background="var(--BRL)"

}}

function updateTo(inputTo,imgTo){

    switch(inputTo){
        case 'USD':
            
            imgTo.style.background="var(--USD)"
    break;
        case 'BRL':
            imgTo.style.background="var(--BRL)"
            break;
        case 'EUR':
            imgTo.style.background="var(--EUR)"
            break;
        case 'GBP':
            imgTo.style.background="var(--GBP)"
            break;
        default:
            imgTo.style.background="var(--BRL)"

}}


fromCurrencyInput.addEventListener('input', convertCoin)

async function convertCoin(){
    const fromCurrency =from.value 
    const toCurrency= to.value
    const toCurrencyInput = document.getElementById('toCurrencyInput')
    const amount = document.getElementById('fromCurrencyInput').value
    const apiKey ='9780bb50fa1cecb557872307'
    const apiUrl= `https://open.er-api.com/v6/latest/${fromCurrency}`


    try{
   
        const response = await fetch(apiUrl)
        const data = await response.json()
        const rate = data.rates[toCurrency]
        const convertedAmout= rate*amount
        const totalamount =convertedAmout.toFixed(2)
        const text = document.querySelector('.result')
        text.innerText=`${amount} ${fromCurrency} = ${totalamount} ${toCurrency}`
        toCurrencyInput.value=totalamount
    }catch(error){
        console.log(error)
    }
}
