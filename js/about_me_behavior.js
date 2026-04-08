const hearth = document.getElementById("hearth");
const hand = document.getElementById("hand");
const dog = document.getElementById("dog");
const paws = document.getElementById("paws");
const flowers = document.getElementById("flowers");
const star = document.getElementById("star");
const bulb = document.getElementById("bulb");
const right_modal = document.getElementById("right_modal");
const left_modal = document.getElementById("left_modal");
const title_right   = right_modal.querySelector(".modal_title");
const content_right = right_modal.querySelector(".modal_content");
const title_left   = left_modal.querySelector(".modal_title");
const content_left = left_modal.querySelector(".modal_content");
const right_bunny = document.getElementById("right_bunny");
const left_bunny = document.getElementById("left_bunny");

const contents={
    hearth:"Everything I do is made with my heart on it, so there is a quality guarantee.",
    hand:"I like to fight for what is right, in every kind of way, and help in any way I can. Justice for humans, justice for animals and justice for the environment.",
    dog:"I love animals and try to fight for their safety and well being, this has helped me to develop an interest in drawing them too and learn more than human anatomy.",
    flowers:"I love to grow and improve in any chance I get. Im also adaptable to different directions and tasks",
    star:"My wish is to use what I know and keep learning to do a good deed, not only entertain, inform, raise awareness and make a change.",
    bulb:"I’m full of ideas but can understand the ones from others, can comprehend what is wanted, also yes, I’m still learning but I do it fast, anything that is needed",
    pieces:"I can work with different people and learn how to adapt to different teams."
}

let click_counter_right = 0;
let click_counter_left = 0;
let last_modal_right = "";
let last_modal_left = "";
let right_active = false;
let left_active = false;

//About_Me Functions
//Hearth
hearth.addEventListener("mouseover", ()=>{
    hearth.src="../media/about_me/hearth_on.png";
    right_bunny.classList.add("visible");
})

hearth.addEventListener("mouseout", ()=>{
    hearth.src="../media/about_me/hearth_off.png";
    if(!right_active){
        right_bunny.classList.remove("visible");
    }
    
})

hearth.addEventListener("click", ()=>{
    if(click_counter_right==1 && right_active && (last_modal_right=="hearth")){
        right_modal.style.display="none";
        right_bunny.classList.remove("visible");
        right_active=false;
        click_counter_right=0;
        last_modal_right="";
    }
    else if(!right_active){
        right_modal.style.display="block";
        right_bunny.classList.add("visible");
        click_counter_right++;
        right_active = true;
        last_modal_right="hearth";
        content_right.innerHTML = contents.hearth;
    }
})



//Hand
hand.addEventListener("mouseover", ()=>{
    hand.src="../media/about_me/hand_on.png";
    right_bunny.classList.add("visible");

})

hand.addEventListener("mouseout", ()=>{
    hand.src="../media/about_me/hand_off.png";
    right_bunny.classList.remove("visible");
})

hand.addEventListener("click", ()=>{
    if(click_counter_right==1 && right_active && (last_modal_right=="hand")){
        right_modal.style.display="none";
        right_bunny.classList.remove("visible");
        right_active=false;
        click_counter_right=0;
        last_modal_right="";
    }
    else if(!right_active){
        right_modal.style.display="block";
        right_bunny.classList.add("visible");
        click_counter_right++;
        right_active = true;
        last_modal_right="hand";

        content_right.innerHTML = contents.hand;
    }
})


//Dog
dog.addEventListener("mouseover", ()=>{
    dog.src="../media/about_me/dog_head_on.png";
    paws.src="../media/about_me/paws_on.png";
    right_bunny.classList.add("visible");
})

dog.addEventListener("mouseout", ()=>{
    dog.src="../media/about_me/dog_head_off.png";
    paws.src="../media/about_me/paws_off.png";
    right_bunny.classList.remove("visible");
})

dog.addEventListener("click", ()=>{
    if(click_counter_right==1 && right_active && (last_modal_right=="dog" || last_modal_right=="paws")){
        right_modal.style.display="none";
        right_bunny.classList.remove("visible");
        right_active=false;
        click_counter_right=0;
        last_modal_right="";
    }
    else if(!right_active){
        right_modal.style.display="block";
        right_bunny.classList.add("visible");
        click_counter_right++;
        right_active = true;
        last_modal_right="dog";
        content_right.innerHTML = contents.dog;
    }
})

//Dog

paws.addEventListener("mouseover", ()=>{
    dog.src="../media/about_me/dog_head_on.png";
    paws.src="../media/about_me/paws_on.png";
    right_bunny.classList.add("visible");
})

paws.addEventListener("mouseout", ()=>{
    dog.src="../media/about_me/dog_head_off.png";
    paws.src="../media/about_me/paws_off.png";
    right_bunny.classList.remove("visible");
})

paws.addEventListener("click", ()=>{
    if(click_counter_right==1 && right_active && (last_modal_right=="dog" || last_modal_right=="paws")){
        right_modal.style.display="none";
        right_bunny.classList.remove("visible");
        right_active=false;
        click_counter_right=0;
        last_modal_right="";
    }
    else if(!right_active){
        right_modal.style.display="block";
        right_bunny.classList.add("visible");
        click_counter_right++;
        right_active = true;
        last_modal_right="paws";

        title_right.textContent = titles.dog;
        content_right.innerHTML = contents.dog;
    }
})


//Flowers
flowers.addEventListener("mouseover", ()=>{
    flowers.src="../media/about_me/flower_on.png";
    left_bunny.classList.add("visible");
})

flowers.addEventListener("mouseout", ()=>{
    flowers.src="../media/about_me/flower_off.png";
    left_bunny.classList.remove("visible");
})

flowers.addEventListener("click", ()=>{
    if(click_counter_left==1 && left_active && (last_modal_left=="flowers")){
        left_modal.style.display="none";
        left_bunny.classList.remove("visible");
        left_active=false;
        click_counter_left=0;
        last_modal_left="";
    }
    else if(!left_active){
        left_modal.style.display="block";
        left_bunny.classList.add("visible");
        click_counter_left++;
        left_active = true;
        last_modal_left="flowers";

        content_left.innerHTML = contents.flowers;
    }
})


//Pieces
pieces.addEventListener("mouseover", ()=>{
    pieces.src="../media/about_me/pieces_on.png";
    left_bunny.classList.add("visible");
})

pieces.addEventListener("mouseout", ()=>{
    pieces.src="../media/about_me/pieces_off.png";
    left_bunny.classList.remove("visible");
})

pieces.addEventListener("click", ()=>{
    if(click_counter_left==1 && left_active && (last_modal_left=="pieces")){
        left_modal.style.display="none";
        left_bunny.classList.remove("visible");
        left_active=false;
        click_counter_left=0;
        last_modal_left="";
    }
    else if(!left_active){
        left_modal.style.display="block";
        left_bunny.classList.add("visible");
        click_counter_left++;
        left_active = true;
        last_modal_left="pieces";

        content_left.innerHTML = contents.pieces;
    }
})


//Star
star.addEventListener("mouseover", ()=>{
    star.src="../media/about_me/star_on.png";
    right_bunny.classList.add("visible");
})

star.addEventListener("mouseout", ()=>{
    star.src="../media/about_me/star_off.png";
    right_bunny.classList.remove("visible");
})

star.addEventListener("click", ()=>{
    if(click_counter_right==1 && right_active && (last_modal_right=="star")){
        right_modal.style.display="none";
        right_active=false;
        click_counter_right=0;
        last_modal_right="";
        right_bunny.classList.remove("visible");
    }
    else if(!right_active){
        right_modal.style.display="block";
        click_counter_right++;
        right_active = true;
        last_modal_right="star";
        right_bunny.classList.add("visible");

        content_right.innerHTML = contents.star;
    }
})


//Bulb
bulb.addEventListener("mouseover", ()=>{
    bulb.src="../media/about_me/bulb_on.png";
    left_bunny.classList.add("visible");
})

bulb.addEventListener("mouseout", ()=>{
    bulb.src="../media/about_me/bulb_off.png";
    left_bunny.classList.remove("visible");
})

bulb.addEventListener("click", ()=>{
    if(click_counter_left==1 && left_active && (last_modal_left=="bulb")){
        left_modal.style.display="none";
        left_bunny.classList.remove("visible");
        left_active=false;
        click_counter_left=0;
        last_modal_left="";
    }
    else if(!left_active){
        left_modal.style.display="block";
        left_bunny.classList.add("visible");
        click_counter_left++;
        left_active = true;
        last_modal_left="bulb";

        content_left.innerHTML = contents.bulb;
    }
})