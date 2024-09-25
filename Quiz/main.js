
 

function endresult() {
    if(username != "") {
        document.getElementById("finalscore").innerText = + username + ", dit is je score:\n";
    }
    var result = document.getElementById("end")
    if(score == 10) {
        result.innerText = "Perfect!"
        document.getElementById("choicebutton").style.display = "none";
    }

    else if (score > 7 ) {
        result.innerText = "Erg goed!"
    } 

    else if (score > 5) {
        result.innerText = "Goed genoeg!"
    }

    else if(score > 3) {
        result.innerText = "Gefaald"
    }

    else if( score > 0) {
        result.innerText = "Erg slecht!"
    }

    else if( score == 0) {
        result.innerText = "Heb je dit expres gedaan?"
        
    }

    index1 = 0;
var choicebutton = document.getElementById("choicebutton")
choicebutton.onmousedown = function() {
    choicebutton.style.display = "none";

    var arrayLength = questions.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(questions[i]);
        if(questions[i].correct == false) {
            var newdiv = document.createElement("div");
            newdiv.classList = "enddiv";
            var newawnserinput = document.createElement("p");
            newawnserinput.classlist = "awnserinput";
            newawnserinput.innerHTML = "Vraag: " + questions[i].question +"\n Het correcte antwoord was: " + questions[i].awnser;
            var newexplanationinput = document.createElement("p");
            newexplanationinput.classlist = "explanationinput";
            newexplanationinput.innerText = questions[i].explanation;

            document.getElementById("answerpage").appendChild(newdiv);
            newdiv.appendChild(newawnserinput);
            newdiv.appendChild(newexplanationinput);
        }
        }
    }



}
function shufflearray(array) {
   
    const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
    return(shuffledArray);
}


function quizawnser(event) {
    choice = event.target.innerText;
    if(choice == questions[index1].awnser) {
        score++;
        document.getElementById("score").innerText = score;
        questions[index1].correct = true;
    }
    quiznext();
}

function quiznext(){
    index1++;
    if(index1 == 10) {
        document.getElementById("quizpage").style.display = "none";
        document.getElementById("answerpage").style.display = "flex";
        endresult();
    }
    var timeleft = 15;
    document.getElementById("timer").innerHTML = timeleft + " seconds resterend";
    quizinput();
}


function quizinput(){
    var timeleft = 15;
   const timer  = setTimeout(quiznext, 16000);
   
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = "Tijd is op";
  } else {
    timeleft -= 1;
    document.getElementById("timer").innerHTML = timeleft + " seconds resterend";
    
  }
 
}, 1000);

   
    document.getElementById("question").innerHTML = questions[index1].question;
    var quizitems = document.getElementsByClassName("quizitem");
    var shuffledarray = shufflearray(questions[index1].choices);
    for (index2 = 0; index2 < quizitems.length; index2++) {
    quizitems[index2].innerText = shuffledarray[index2];
    quizitems[index2].onmousedown = function (event) {
        clearInterval(downloadTimer);
        clearTimeout(timer);
        quizawnser(event); 
    }
  
}
        
}

function nameinput() {
   
    if(username != "") {
        document.getElementById("user").innerText = "Hallo, " + username + ", hier is de vraag die je moet beantwoorden:\n";
    }
}
   


var input = document.getElementById("confirmname");
var score = 0; 
var index1 = 0;   
var index2 = 0;
var username;
var timeleft = 0;
const array = [
    {question:"Wat is de oudste stad in Nederland?", awnser: "Nijmegen", correct: false, explanation: "Nijmegen is meestal beschouwt als de oudste stad in Nederland.", choices:["Nijmegen", "Amsterdam", "Utrecht", "Groningen"]},
    {question:"De eerste koning van Nederland was?", awnser: "Willem I", correct: false, explanation: "Wiliam was nooit een koning, zijn titel was prins.", choices:["Willem van oranje", "Willem I", "Willem-Alexander", "Gerolf"]},
    {question:"The hertog van Nederland in 1455 was?", awnser: "Philip I", correct: false, explanation: "In 1455, de hertog van Holland was Philip I, beter bekkend als Phillip de Goede, die ook de hertog van burgundy was.", choices:["Philip I", "William V", "Floris V", "Alexander"]},
    {question:"De kleur van Nederland is?", awnser: "Oranje.", correct: false, explanation:"William Van Oranje was de prins van oranje(duh), daardoor is het onze nationaale kleur geworden.", choices:["Blauw", "Groen", "Geel", "Oranje."]},
    {question:"Tijdens het rampjaar in 1672, wat gebeurde er met de gebroeders De Witt?", awnser: "Opgegeten.", correct: false, explanation:"Geloof het of niet, maar tijdens rellen in verband met het rampjaar werden de broeders De Witt vermoord en door de menigten opgegeten.", choices:["Opgegeten.", "Ontslagen.", "Gevangen genomen ", "Gekozen tot raadpensionaris."]},
    {question:"Waneer kwam de Film Flodder uit?", awnser: "1986", correct: false, explanation:"De eerste film kwam uit in 1986.", choices:["1986", "1993", "2000", "1965"]},
    {question:"Waneer kwam de NES uit in Nederland?", awnser: "1987", correct: false, explanation: "De NES kwam uit in 1987. Bandai BV was bij introductie de distributeur, later werd dit Nintendo Nederland.", choices:["1987", "1982", "1985", "1990"]},
    {question:"Waneer heeft nederland het WK gewonnen?", awnser: "Nooit", correct: false, explanation: "Ook al hebben we in 1988 het EK gewonnen, zijn we nooit wereldkampioen geworden.", choices:["1988", "Nooit", "2010", "1956"]},
    {question:"Kroketten in frankrijk heten?", awnser: "Croquettes", correct: false, explanation: "Croquettes hebben meestal een ander recept, maar ze zijn nog steeds hetzelfde. ", choices:["Croquettes", "Pastries", "Baguette", "Quiche."]},
    {question:"Belgie werd onafhankelijk in:", awnser: "1830", correct: false, explanation: "De belgische Revolutie begon in 1830, na een opvoering van de opera De Stomme van Portici tot rellen. ", choices:["1830", "1240", "1958.", "2001."]}    
]

questions = shufflearray(array);

input.onclick = function (event) {
    document.getElementById("intropage").style.display = "none";
    document.getElementById("quizpage").style.display = "flex";
    username = event.target.parentElement.children[1].value;
    nameinput();
    quizinput();
    
}