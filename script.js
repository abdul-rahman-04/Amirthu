const text =
"Today is the day the world was blessed with someone truly amazing and that's you. I created this little space on the internet just to celebrate you and remind you how special you are.So take a moment, smile, and explore this page… because today is all about you. 💫";

let i = 0;

/* TYPING EFFECT */

function type(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

document.addEventListener("DOMContentLoaded", function () {

  const messages = [
  "Heyyy Jii .... As today is 19th April which is ur Birthday",
  "I really wanted to make it feel a little more special than usual 💖",
  "Even with all the thoughts you carry, you still manage to make others feel okay 😊",
  "I don’t think you realize how much you mean to people around you...",
  "But I do .... You mean more than you think 🥺",
  "So I donn’t want this day to be just another ‘Happy Birthday’...",
  "I wanted to do something different this time...",
  "So yeah… this is for you ❤️"
  ];

  let index = 0;
  let charIndex = 0;

  const textEl = document.getElementById("text");
  const btn = document.getElementById("nextBtn");

  function typeText() {
    if (charIndex < messages[index].length) {
      textEl.innerHTML += messages[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 35);
    } else {
      btn.style.opacity = 1;
      btn.style.pointerEvents = "auto"; // ✅ enable click
    }
  }

  function nextStep() {
    btn.style.opacity = 0;
    btn.style.pointerEvents = "none";

    index++;
    charIndex = 0;
    textEl.innerHTML = "";

    if (index < messages.length) {
      setTimeout(typeText, 300);
    } else {
      openMain();
    }
  }

  function openMain() {
    const intro = document.getElementById("intro");

    intro.style.transition = "1s";
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      document.getElementById("mainContent").style.display = "block";
      document.body.style.overflow = "auto";
    }, 1000);
  }

  // ✅ FIX: proper event listener (works on phone)
  btn.addEventListener("click", nextStep);

  // start typing
  typeText();

});

/* AUTO PLAY MUSIC */

window.addEventListener("load", function(){

const music = document.getElementById("bgMusic");

let playPromise = music.play();

if(playPromise !== undefined){

playPromise.catch(() => {

document.addEventListener("click", () => {

music.play();

}, {once:true});

});

}

});





/* OPEN SURPRISE */

function showSurprise(){

document.getElementById("surprise").classList.remove("hidden");

/* HIDE BUTTON */

document.querySelector(".btn").style.display="none";

/* SCROLL DOWN */

window.scrollTo({

top:window.innerHeight,
behavior:"smooth"

});

}



/* OPEN GIFT */

function openGift(){

document.getElementById("popup").classList.remove("hidden");

launchConfetti();

launchFireworks();

}



/* CLOSE POPUP */

function closePopup(){

document.getElementById("popup").classList.add("hidden");

}



/* CONFETTI EFFECT */

function launchConfetti(){

for(let i=0;i<120;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="8px";
confetti.style.height="8px";

confetti.style.background=
`hsl(${Math.random()*360},100%,50%)`;

confetti.style.top="-10px";

confetti.style.left=Math.random()*window.innerWidth+"px";

confetti.style.transition="top 3s linear";

document.body.appendChild(confetti);

setTimeout(()=>{
confetti.style.top="100vh";
},100);

setTimeout(()=>{
confetti.remove();
},3000);

}

}



/* FIREWORKS EFFECT */

function launchFireworks(){

for(let i=0;i<70;i++){

let spark=document.createElement("div");

spark.style.position="fixed";

spark.style.width="8px";
spark.style.height="8px";

spark.style.background=
`hsl(${Math.random()*360},100%,50%)`;

spark.style.top="50%";
spark.style.left="50%";

spark.style.borderRadius="50%";

spark.style.transition="all 1.5s ease";

document.body.appendChild(spark);

setTimeout(()=>{

spark.style.transform=
`translate(${Math.random()*800-400}px,
${Math.random()*800-400}px)`;

spark.style.opacity=0;

},50);

setTimeout(()=>{
spark.remove();
},1500);

}

}