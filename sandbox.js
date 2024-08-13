const correctAnswers = ['B','A','B', 'B'];

const form = document.querySelector(".quiz-form");

const res = document.querySelector('.score');

const sco = document.querySelector('span');

console.log(sco);

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswer.forEach((answer,index)=>{

        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    scrollTo(0,0);
    res.classList.remove("invisible");
   

    let output = 0;

    const timer = setInterval(() => {
        res.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 10);
    


});

