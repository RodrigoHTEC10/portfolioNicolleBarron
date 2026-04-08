const prev_btn = document.getElementById("nav_prev_ill");
const next_btn = document.getElementById("nav_next_ill");
const background = document.getElementById("main_background");

let index = 0;

const illustrations = [];
illustrations.push("../media/illustration/ill_1.png");
illustrations.push("../media/illustration/ill_2.png");
illustrations.push("../media/illustration/ill_3.png");
illustrations.push("../media/illustration/ill_4.png");

prev_btn.addEventListener("click", ()=>{
    console.log('click prev');
    index = (index - 1 + illustrations.length) % illustrations.length;
    background.src = illustrations[index];
});

next_btn.addEventListener("click", ()=>{
    console.log('click next');
    index = (index + 1) % illustrations.length;
    background.src = illustrations[index];
});