let bodyOfThePage = null;
let boxButton = null;
let bigDaddy = null;
let happyBirthdayText = null;
let popperAudio = null;
let imageContainer = null;
let buttonOfLove = null;
let snowFlakeContainer = null;

document.addEventListener('DOMContentLoaded', ()=>{
    bodyOfThePage = document.getElementsByTagName('body')[0];
    boxButton = document.getElementsByClassName('surpriseBox')[0];
    bigDaddy = document.getElementsByClassName('bigDaddy')[0];
    happyBirthdayText = document.getElementsByClassName('happyBirthday')[0];
    popperAudio = document.getElementById('popperAudio');  
    imageContainer = document.getElementsByClassName('imageContainer')[0];
    buttonOfLove = document.getElementsByClassName('buttonOfLove')[0];
    snowFlakeContainer = document.getElementsByClassName('snowflakeContainer')[0];

    buttonOfLove.addEventListener('click', loveButtonJob);
    boxButton.addEventListener('click', onBoxPressed);
});


function onBoxPressed(){
    
    
    boxButton.classList.add('noOpacity');
    popperAudio.play();
    
    bigDaddy.classList.add('confettiBlast');
    
    setTimeout(() => {
        
        happyBirthdayText.classList.add('noOpacity');
        
        setTimeout(()=>{
            happyBirthdayText.classList.add('noDisplay');
            boxButton.classList.add('noDisplay');
            bigDaddy.classList.remove('confettiBlast');
            imageContainer.classList.remove('noDisplay');
            imageContainer.classList.add('fullOpacity');
            bigDaddy.classList.add('resetTopPadding');
        }, 400);
        
        
    }, 4000);
}


function showSnowFlake(){
    snowFlakeContainer.innerHTML = `<div class="snowflakes" aria-hidden="true"><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div><div class="snowflake">💗</div></div>`;    
}

function loveButtonJob(){
    showSnowFlake();
    let myImages = document.getElementsByClassName('myImage');

    for(let image of myImages){
        image.classList.add('loveIsInTheAir');
    }
}
