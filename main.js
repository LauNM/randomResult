const buttonShowResult = document.getElementById('resultButton');
const buttonTryAgain = document.getElementById('tryAgain');
const list = document.getElementById('results');
const finalResult = document.getElementById('finalResult');
const finalDiv = document.getElementById('final');
const choices = [
    {
        id: 1,
        value: "abstention"
    },
    {
        id: 2,
        value: "vote blanc ou nul"
    },
    {
        id: 3,
        value: "vote contre Le Pen"
    }
];
let listOfResults = [];


const showResult = () => {
    const choice = document.createElement('li');
    const result = choices[Math.floor(Math.random() * choices.length)]
    choice.innerHTML = result.value;
    list.appendChild(choice)
    listOfResults.push(result.id);

    if (listOfResults.length === 10) {
        finalResult.innerHTML = choices[findFinalResult(listOfResults)-1].value;
        buttonShowResult.disabled = true;
        finalDiv.classList = 'done';

    }
}

const findFinalResult = (arr) => {
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}



const tryAgain = () => {
    listOfResults = [];
    list.innerHTML = '';
    finalResult.innerHTML = '';
    buttonShowResult.disabled = false;
    finalDiv.classList.remove('done')
}

buttonShowResult.addEventListener('click', showResult)
buttonTryAgain.addEventListener('click', tryAgain)