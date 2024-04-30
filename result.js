// document.addEventListener('DOMContentLoaded', function() {
//     const score = sessionStorage.getItem('score');
//     const resultMessage = document.getElementById('result-message');
//     resultMessage.textContent = "Your Quiz was Submitted";

//     const showResultBtn = document.getElementById('show-result-btn');
//     showResultBtn.addEventListener('click', function() {
//         showResult();
//     });

//     function showResult() {
//         const resultContainer = document.querySelector('.result-container');
//         const scoreDisplay = document.createElement('p');
//         scoreDisplay.textContent = `You scored ${score} out of 15`;
//         resultContainer.appendChild(scoreDisplay);
       
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    let resultDisplayed = false; // Flag to track if the result has been displayed

    const score = sessionStorage.getItem('score');
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = "Your Quiz was Submitted";

    const showResultBtn = document.getElementById('show-result-btn');
    showResultBtn.addEventListener('click', function() {
        if (!resultDisplayed) { // Check if result has not been displayed before
            showResult();
            resultDisplayed = true; // Set the flag to true once the result is displayed
        }
    });

    function showResult() {
        const resultContainer = document.querySelector('.result-container');
        const scoreDisplay = document.createElement('p');
        scoreDisplay.textContent = `You scored ${score} out of 15`;
        resultContainer.appendChild(scoreDisplay);
    }
});
