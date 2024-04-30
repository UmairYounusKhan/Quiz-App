document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz');
    const submitBtn = document.getElementById('submit-btn');

    function calculateScore() {
        const correctAnswers = ['A', 'B', 'B', 'A', 'A', 'C', 'A', 'B', 'C', 'C', 'A', 'A', 'B', 'B', 'c']; // Correct answers for questions 1 and 2
        const q1Input = quizForm.querySelector('input[name="q1"]:checked');
        const q2Input = quizForm.querySelector('input[name="q2"]:checked');
        const q3Input = quizForm.querySelector('input[name="q3"]:checked');
        const q4Input = quizForm.querySelector('input[name="q4"]:checked');
        const q5Input = quizForm.querySelector('input[name="q5"]:checked');
        const q6Input = quizForm.querySelector('input[name="q6"]:checked');
        const q7Input = quizForm.querySelector('input[name="q7"]:checked');
        const q8Input = quizForm.querySelector('input[name="q8"]:checked');
        const q9Input = quizForm.querySelector('input[name="q9"]:checked');
        const q10Input = quizForm.querySelector('input[name="q10"]:checked');
        const q11Input = quizForm.querySelector('input[name="q11"]:checked');
        const q12Input = quizForm.querySelector('input[name="q12"]:checked');
        const q13Input = quizForm.querySelector('input[name="q13"]:checked');
        const q14Input = quizForm.querySelector('input[name="q14"]:checked');
        const q15Input = quizForm.querySelector('input[name="q15"]:checked');

        if (!q1Input || !q2Input || !q3Input || !q4Input || !q5Input || !q6Input || !q7Input || !q8Input || !q9Input || !q10Input || !q11Input || !q12Input || !q13Input || !q14Input || !q15Input) {
            alert('Please answer all questions before submitting.');
            return;
        }

        const userAnswers = [q1Input.value, q2Input.value, q3Input.value, q4Input.value, q5Input.value, q6Input.value, q7Input.value, q8Input.value, q9Input.value, q10Input.value, q11Input.value, q12Input.value, q13Input.value, q14Input.value, q15Input.value];

        const score = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
        sessionStorage.setItem('score', score);
        window.location.href = 'result.html';
    }

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        calculateScore();
    });
});
