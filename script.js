const questionsE1 = document.getElementById('questions')
const scoreE1 = document.getElementById('score')
const btnE1 = document.getElementById('btn')

var xhttp = new XMLHttpRequest();

xhttp.onreadyState = (e) => {
    let result = e.target;
    //console.log(e, result)

   if (result.readyState === 4 && result.status ===200) {
    let data = JSON.parse(result.response)
    renderQuestions(data);
    console.log(data)
    

    }else {
       // console.warn("Something is wrong, try again!")
    }
}
xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true)
xhttp.send()



function renderQuestions(data) {
    let output='';
    console.log(data)
    for (let i=0; i<data.length;i++){
        output += '
        '
    }
    
    
}

btnE1.addEventListener('click',()=>) ;{
    //todo: calculate
    //todo: update
}



<div class="question">
<h2>Q${i+1}.${data[i].question}</h2>
<label><input type="radio" name="q${i}">${data[i].options[0]}</label>
<label><input type="radio" name="q${i}">${data[i].options[1]}</label>
<label><input type="radio" name="q${i}">${data[i].options[2]}</label>
<label><input type="radio" name="q${i}">${data[i].options[3]}</label>
</div>