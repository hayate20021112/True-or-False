const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let sum;
let correctAnser;

const questions = [
    {question: '新幹線には灯式信号機がついていない◯か☓か。',anser:1},
    {question: '新幹線のレールの幅は1435mmである◯か☓か。',anser:1},
    {question: '新幹線の運転はすべて自動運転である◯か☓か。',anser:0},
    {question: '新幹線の架線電圧は5万ボルトである◯か☓か。',anser:0}
];

function anser(ans) {
    if (ans === questions[sum].anser) {
        console.log('正解');
        correctAnser++;
    } else {
        console.log('不正解');
    }

    sum++;

    if (sum === questions.length){
        alert(`${questions.length}問中${correctAnser}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
}


function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onStart() {
    sum = 0;
    writeQuestion();
}

onStart();
