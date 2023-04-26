const adviceCapt = document.querySelector('#caption-advice');
const diceBtn = document.querySelector('#icon-dice');

const numberAdv = document.querySelector('#number-advice');


diceBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice').then(Response => {
        return Response.json();
    })
    .then(adviceData => {

        // Code for the "advice displayed"
        const AdviceObj = adviceData.slip;
        adviceCapt.innerHTML = `${AdviceObj.advice}`;


        // Code for the "Advice #"
        const AdviceNbr = adviceData.slip;
        numberAdv.innerHTML = `Advice #${AdviceNbr.id}`
        
        
        console.log(AdviceObj);
    })
    .catch(error => {
        console.log(error)
    })
});