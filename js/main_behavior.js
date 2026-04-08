const about_me = document.getElementById("about_me");
const animations = document.getElementById("animations");
const illustrations = document.getElementById("illustrations");
const experience = document.getElementById("experience");
const abilities = document.getElementById("abilities");
const contact = document.getElementById("contact");

//About_Me Functions
//#FD6983
about_me.addEventListener("mouseover", ()=>{
    const image = document.getElementById("about_me_button");
    image.src="../media/main/about_me_open.png";
    image.style.width="220px";
    const nestedTitle = about_me.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#FD6983";
    }
})

about_me.addEventListener("mouseout", ()=>{
    const image = document.getElementById("about_me_button");
    image.src="../media/main/about_me_closed.png";
    image.style.width="200px";
    const nestedTitle = about_me.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})


//About_Me Functions
//#FC9959
animations.addEventListener("mouseover", ()=>{
    const image = document.getElementById("animations_button");
    image.src="../media/main/animation_open.png";
    image.style.width="220px";
    const nestedTitle = animations.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#FC9959";
    }
})

animations.addEventListener("mouseout", ()=>{
    const image = document.getElementById("animations_button");
    image.src="../media/main/animation_closed.png";
    image.style.width="200px";
    const nestedTitle = animations.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})

//Illustration Functions
//#FEFA9B
illustrations.addEventListener("mouseover", ()=>{
    const image = document.getElementById("illustrations_button");
    image.src="../media/main/illustration_open.png";
    image.style.width="220px";
    const nestedTitle = illustrations.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#FEFA9B";
    }
})

illustrations.addEventListener("mouseout", ()=>{
    const image = document.getElementById("illustrations_button");
    image.src="../media/main/illustration_closed.png";
    image.style.width="200px";
    const nestedTitle = illustrations.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})


//Experience Functions
//#6FF2AD
experience.addEventListener("mouseover", ()=>{
    const image = document.getElementById("experience_button");
    image.src="../media/main/experience_open.png";
    image.style.width="220px";
    const nestedTitle = experience.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#6FF2AD";
    }
})

experience.addEventListener("mouseout", ()=>{
    const image = document.getElementById("experience_button");
    image.src="../media/main/experience_closed.png";
    image.style.width="200px";
    const nestedTitle = experience.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})


//Abilities Functions
//#6794FD
abilities.addEventListener("mouseover", ()=>{
    const image = document.getElementById("abilities_button");
    image.src="../media/main/abilities_open.png";
    image.style.width="220px";
    const nestedTitle = abilities.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#6794FD";
    }
})

abilities.addEventListener("mouseout", ()=>{
    const image = document.getElementById("abilities_button");
    image.src="../media/main/abilities_closed.png";
    image.style.width="200px";
    const nestedTitle = abilities.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})


//Contact Functions
//#E488F1
contact.addEventListener("mouseover", ()=>{
    const image = document.getElementById("contact_button");
    image.src="../media/main/contact_open.png";
    image.style.width="220px";
    const nestedTitle = contact.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#E488F1";
    }
})

contact.addEventListener("mouseout", ()=>{
    const image = document.getElementById("contact_button");
    image.src="../media/main/contact_closed.png";
    image.style.width="200px";
    const nestedTitle = contact.querySelector('span');
    if(nestedTitle){
        nestedTitle.style.color="#BEB1F6";
    }
})
