const about_me = document.getElementById("about_me");
const animations = document.getElementById("animations");
const illustrations = document.getElementById("illustrations");
const experience = document.getElementById("experience");
const abilities = document.getElementById("abilities");
const contact = document.getElementById("contact");

//About_Me Functions
//#FD6983

about_me.addEventListener("mouseover", () => {
    document.getElementById("about_me_button").src = "../media/main/about_me_open.png";
    about_me.querySelector('span').style.color = "#FD6983";
})
about_me.addEventListener("mouseout", () => {
    document.getElementById("about_me_button").src = "../media/main/about_me_closed.png";
    about_me.querySelector('span').style.color = "#BEB1F6";
})

animations.addEventListener("mouseover", () => {
    document.getElementById("animations_button").src = "../media/main/animation_open.png";
    animations.querySelector('span').style.color = "#FC9959";
})
animations.addEventListener("mouseout", () => {
    document.getElementById("animations_button").src = "../media/main/animation_closed.png";
    animations.querySelector('span').style.color = "#BEB1F6";
})

illustrations.addEventListener("mouseover", () => {
    document.getElementById("illustrations_button").src = "../media/main/illustration_open.png";
    illustrations.querySelector('span').style.color = "#FEFA9B";
})
illustrations.addEventListener("mouseout", () => {
    document.getElementById("illustrations_button").src = "../media/main/illustration_closed.png";
    illustrations.querySelector('span').style.color = "#BEB1F6";
})

experience.addEventListener("mouseover", () => {
    document.getElementById("experience_button").src = "../media/main/experience_open.png";
    experience.querySelector('span').style.color = "#6FF2AD";
})
experience.addEventListener("mouseout", () => {
    document.getElementById("experience_button").src = "../media/main/experience_closed.png";
    experience.querySelector('span').style.color = "#BEB1F6";
})

abilities.addEventListener("mouseover", () => {
    document.getElementById("abilities_button").src = "../media/main/abilities_open.png";
    abilities.querySelector('span').style.color = "#6794FD";
})
abilities.addEventListener("mouseout", () => {
    document.getElementById("abilities_button").src = "../media/main/abilities_closed.png";
    abilities.querySelector('span').style.color = "#BEB1F6";
})

contact.addEventListener("mouseover", () => {
    document.getElementById("contact_button").src = "../media/main/contact_open.png";
    contact.querySelector('span').style.color = "#E488F1";
})
contact.addEventListener("mouseout", () => {
    document.getElementById("contact_button").src = "../media/main/contact_closed.png";
    contact.querySelector('span').style.color = "#BEB1F6";
})