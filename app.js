    // set default
    function defaultpage() {
        event.preventDefault();
        randomvalue();
        const answerText = document.getElementById("Ans");
        answerText.innerHTML = "ผลลัพธ์";
    }
    
        // reloadpage
    function Reload() {
        location.reload(true);
        
    }
        // random
   
    function getRndInteger(min, max) {    
        return Math.floor(Math.random() * (max - min)) + min;
       }
     function randomvalue(){
        const answer1 = document.getElementById('ran1').value = getRndInteger(0,50);
        const answer2 = document.getElementById('ran2').value = getRndInteger(0,50);
        const inputAns = document.getElementById("ran3");
        inputAns.value = "";
     }
    
        // operater
    function operater(selectedRadio) {
        const answer = document.getElementById("op");
        answer.textContent = selectedRadio.value;
    }
    
    
        // sendbtn
    let countscore = 0;
    let score = 0;
    function send() {
        event.preventDefault();
        const inputRan1 = document.getElementById("ran1");
        const inputRan2 = document.getElementById("ran2");
        const inputRan3 = document.getElementById("ran3");
        const ran1 = parseFloat(inputRan1.value);
        const ran2 = parseFloat(inputRan2.value);
        const ran3 = parseFloat(inputRan3.value);
        const op = document.querySelector("input[name='choice']:checked").value;
    
        let answer;
        switch (op) 
        {
            case "+":
                answer = ran1+ran2;
                break;
            case "-":
                answer = ran1-ran2;
                break;
            case "×":
                answer = ran1*ran2;
                break;
            case "÷":
                answer = ran1/ran2;
                break;
        }
    
        let Anscheck
        const answerText = document.getElementById("Ans");
        if (answer == ran3) 
        {
            Anscheck = true;
            answerText.innerHTML = "ถูกต้อง";
        } 
        else 
        {
            Anscheck = false;
            answerText.innerHTML = "ไม่ถูกต้อง";
        }
    
        const showscore = document.getElementById("showscore");
        if (Anscheck) 
        {
            ++score;
            ++countscore;
            showscore.innerHTML = "คะแนน : " + score + " / " + countscore;
        } 
        else 
        {
            ++countscore;
            showscore.innerHTML = "คะแนน : " + score + " / " + countscore;
        }
    
        randomvalue();
    }
    