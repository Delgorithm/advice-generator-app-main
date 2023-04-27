const adviceCapt = document.querySelector('#caption-advice');
const adviceNbr = document.querySelector('#number-advice');
const diceBtn = document.querySelector('#icon-dice');


diceBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice').then(Response => {
        return Response.json();
    })
    .then(adviceData => {

        // Code for the "advice displayed"
        const AdviceObj = adviceData.slip;
        adviceCapt.innerHTML = `${AdviceObj.advice}`;


        // Code for the "Advice #"
        const NumberObj = adviceData.slip;
        adviceNbr.innerHTML = `Advice #${NumberObj.id}`
        
        
        console.log(AdviceObj);
    })
    .catch(error => {
        console.log(error)
    })
});