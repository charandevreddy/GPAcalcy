var mar =document.querySelectorAll("#scores")
var res =document.getElementById('result')

var i=1

function newitem() {

    i= i+1
    var node = document.createElement("div")
    node.setAttribute("id" , "table")
    var content = document.getElementById('content')
    content.appendChild(node)
    var score = document.createElement('div')
    score.setAttribute("id", "mark")
    node.appendChild(score)
    var Span = document.createElement("span");
    Span.textContent = `${i}) Marks : `;
    score.appendChild(Span)
    var input = document.createElement("input")
    input.setAttribute("id" , "scores")
    input.setAttribute("type" , "number")
    input.setAttribute("placeholder" , "out of 100")
    input.setAttribute("class" , "input")
    score.appendChild(input)
    var cred = document.createElement('div')
    cred.setAttribute("id", "cred")
    node.appendChild(cred)
    var Spanc = document.createElement("span");
    Spanc.textContent = "Credits : ";
    cred.appendChild(Spanc)
    var inputc = document.createElement("input")
    inputc.setAttribute("id" , "credits")
    inputc.setAttribute("type" , "number")
    inputc.setAttribute("placeholder" , "credits")
    inputc.setAttribute("class" , "input")
    cred.appendChild(inputc)
    var line = document.createElement("hr")
    line.setAttribute("id","line")
    node.appendChild(line)
}

function cal (){
    
    gpoints =[]
    var mar =document.querySelectorAll("#scores")
    var credits =document.querySelectorAll("#credits")
    for (j=0 ;j<i;j++){
        gradepoints(mar[j].value)
    }
    calgpa(gpoints,credits)
}

function gradepoints (marks){
    var points = 0
    if(marks < 0 || marks > 100){
        points = NaN
    }else if(marks <=100 && marks >=90){
        points = 10
    }else if (marks <= 89 && marks >= 80) {
        points = 9
    }else if(marks <= 79 && marks >=70){
        points = 8
    }else if(marks <= 69 && marks >= 60){
        points = 7
    }else if(marks <= 59 && marks >= 50){
        points = 6
    }
    gpoints.push(points)

}



function calgpa (gpoints,credits){
    var sum = 0
    var tcredits = 0
    for ( var j=0 ;j<i;j++){
        sum += parseInt(gpoints[j]) * parseInt(credits[j].value)
        
    } 
    for (var j=0; j<i;j++){
        tcredits += parseInt(credits[j].value)
    }
    result(sum/tcredits)
}

function result (gpa){
    var GPA = gpa.toFixed(3)
    res.innerHTML = `<h1 style="text-align: center; color: #014872;">Your Calculated GPA is : ${GPA}</h1><br>`
}

function removesubject(){

    if(i>1){
        const divrem = document.getElementById("content")
        divrem.removeChild(divrem.lastElementChild);
        i = i-1
    }  else{
        res.innerHTML = `<h2 style="text-align: center; color: #014872;">There should be atleast 1 subject</h2><br>`
    }   
}

console.log("there is nothing to see here.   fill ur marks carefully")

print = () => {
    var mar =document.querySelectorAll("#scores")
    for (j=0 ;j<i;j++){
    console.log(mar[j].value)
    }
}

