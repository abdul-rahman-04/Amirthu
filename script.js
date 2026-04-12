
const text =
"Today is not just another day… it’s the day the world was blessed with someone truly amazing and that's you. I created this little space on the internet just to celebrate you and remind you how special you are.So take a moment, smile, and explore this page… because today is all about you. 💫";

let i = 0;

/* TYPING EFFECT */

function type(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,80);

}

}

type();



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

const messages = [
  "Wait... today is not just a normal day ✨",
  "Someone very special was born today 💖",
  "Someone who brings smiles without trying 😊",
  "Someone who makes every moment better 🌸",
  "And honestly... that someone means a lot to me ❤️",
  "So today is all about you 🥺",
  "Ready to see your surprise? 🎁"
];

let index = 0;
let charIndex = 0;

const textEl = document.getElementById("text");
const btn = document.getElementById("nextBtn");

/* Typing Effect */
function typeText() {
  if (charIndex < messages[index].length) {
    textEl.innerHTML += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 40);
  } else {
    btn.style.opacity = 1;
  }
}

/* Next Step */
function nextStep() {
  btn.style.opacity = 0;
  index++;
  charIndex = 0;
  textEl.innerHTML = "";

  if (index < messages.length) {
    typeText();
  } else {
    openMain();
  }
}

/* Open Main Page */
function openMain() {
  document.getElementById("intro").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    document.body.style.overflow = "auto";
  }, 1000);
}

/* Start */
typeText();

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