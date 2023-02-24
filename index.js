let scoreDisplayOne=document.getElementById("score_display_one");
let scoreDisplayTwo=document.getElementById("score_display_two");
let count1= 0 ;
let count2=0 ;

function plusonet1(){
count1+=1 ;
scoreDisplayOne.innerText=count1;
}

function plustwot1(){
    count1+=2 ;
    scoreDisplayOne.innerText=count1;
}

function plusthreet1(){
    count1+=3 ;
    scoreDisplayOne.innerText=count1;
}

function plusonet2(){
    count2+=1 ;
    scoreDisplayTwo.innerText=count2;
    }
    
    function plustwot2(){
        count2+=2 ;
        scoreDisplayTwo.innerText=count2;
    }
    
    function plusthreet2(){
        count2+=3 ;
        scoreDisplayTwo.innerText=count2;
    }
    function reset(){
        count1 = 0;
        count2 = 0;
        scoreDisplayTwo.innerText=count1;
        
        scoreDisplayOne.innerText=count2;
    }