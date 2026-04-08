
//Original

// const active = document.getElementById("active");
// const inactive_prev = document.getElementById("prev_inactive");
// const inactive_next = document.getElementById("next_inactive");
// const prev_btn = document.getElementById("prev_btn");
// const next_btn = document.getElementById("next_btn");
// const carousel_element = document.getElementById("carousel");

// let index_prev = 0;
// let index_active = 1;
// let index_next = 2;
// let index_carousel = 0;

// const horses = [];
// horses.push("../media/experience/canis.png");
// horses.push("../media/experience/coralia.png");
// horses.push("../media/experience/cuento.png");
// horses.push("../media/experience/personajes.png");

// const carousel = [];
// carousel.push("/media/experience/car_1.png");
// carousel.push("/media/experience/car_2.png");

// prev_btn.addEventListener("click", ()=>{
//     console.log("prev clicked");
//     index_next = index_active;
//     index_prev = (index_active - 2 + horses.length) % horses.length;
//     index_active= (index_active- 1 + horses.length) % horses.length;
//     index_carousel = (index_carousel+ 1) % carousel.length;

//     active.src=horses[index_active];
//     inactive_prev.src = horses[index_prev];
//     inactive_next.src = horses[index_next];
//     carousel_element.src = carousel[index_carousel];
    

// });

// next_btn.addEventListener("click", ()=>{
//     console.log("next clicked");
//     index_prev = index_active;
//     index_next = (index_active+ 2) % horses.length;
//     index_active= (index_active+ 1) % horses.length;
//     index_carousel = (index_carousel+ 1) % carousel.length;


//     active.src=horses[index_active];
//     inactive_prev.src = horses[index_prev];
//     inactive_next.src = horses[index_next];
//     carousel_element.src = carousel[index_carousel];
// });


//Desaparece

// const active        = document.getElementById("active");
// const inactive_prev = document.getElementById("prev_inactive");
// const inactive_next = document.getElementById("next_inactive");
// const prev_btn      = document.getElementById("prev_btn");
// const next_btn      = document.getElementById("next_btn");
// const carousel_element = document.getElementById("carousel");

// let index_prev     = 0;
// let index_active   = 1;
// let index_next     = 2;
// let index_carousel = 0;
// let isAnimating    = false; // prevents click-spamming mid-transition

// const horses = [
//   "../media/experience/canis.png",
//   "../media/experience/coralia.png",
//   "../media/experience/cuento.png",
//   "../media/experience/personajes.png",
// ];

// const carousel = [
//   "/media/experience/car_1.png",
//   "/media/experience/car_2.png",
// ];

// function slide(direction) {
//   if (isAnimating) return;
//   isAnimating = true;

//   const moveOut  = direction === "next" ? "-120px" : "120px";
//   const moveIn   = direction === "next" ?  "120px" : "-120px";

//   // 1. Slide everything out to the left (or right)
//   active.style.transform        = `translateX(${moveOut})`;
//   active.style.opacity          = "0";
//   inactive_prev.style.transform = `translateX(${moveOut})`;
//   inactive_prev.style.opacity   = "0";
//   inactive_next.style.transform = `translateX(${moveOut})`;
//   inactive_next.style.opacity   = "0";

//   // Fade out carousel background
//   carousel_element.style.opacity = "0";

//   setTimeout(() => {
//     // 2. Update indices
//     if (direction === "next") {
//       index_prev     = index_active;
//       index_next     = (index_active + 2) % horses.length;
//       index_active   = (index_active + 1) % horses.length;
//     } else {
//       index_next     = index_active;
//       index_prev     = (index_active - 2 + horses.length) % horses.length;
//       index_active   = (index_active - 1 + horses.length) % horses.length;
//     }
//     index_carousel = (index_carousel + 1) % carousel.length;

//     // 3. Swap sources while invisible
//     active.src              = horses[index_active];
//     inactive_prev.src       = horses[index_prev];
//     inactive_next.src       = horses[index_next];
//     carousel_element.src    = carousel[index_carousel];

//     // 4. Reposition to the opposite side before sliding in
//     active.style.transition        = "none";
//     inactive_prev.style.transition = "none";
//     inactive_next.style.transition = "none";

//     active.style.transform        = `translateX(${moveIn})`;
//     inactive_prev.style.transform = `translateX(${moveIn})`;
//     inactive_next.style.transform = `translateX(${moveIn})`;

//     // 5. Force reflow so the browser registers the repositioning
//     active.getBoundingClientRect();

//     // 6. Restore transitions and slide into place
//     active.style.transition        = "";
//     inactive_prev.style.transition = "";
//     inactive_next.style.transition = "";

//     active.style.transform        = "translateX(0)";
//     active.style.opacity          = "1";
//     inactive_prev.style.transform = "translateX(0)";
//     inactive_prev.style.opacity   = "0.5";
//     inactive_next.style.transform = "translateX(0)";
//     inactive_next.style.opacity   = "0.5";

//     carousel_element.style.opacity = "0.5";

//     isAnimating = false;

//   }, 400); // matches the CSS transition duration
// }

// prev_btn.addEventListener("click", () => slide("prev"));
// next_btn.addEventListener("click", () => slide("next"));


// Movimiento

const active = document.getElementById("active");
const inactive_prev = document.getElementById("prev_inactive");
const inactive_next = document.getElementById("next_inactive");
const hidden = document.getElementById("hidden");
const prev_btn = document.getElementById("prev_btn");
const next_btn = document.getElementById("next_btn");
const carousel_element = document.getElementById("carousel");

let index_prev     = 0;
let index_active   = 1;
let index_next     = 2;
let index_carousel = 0;
let index_hidden = 3;
let isAnimating    = false;

const horses = [
  "../media/experience/canis.png",
  "../media/experience/coralia.png",
  "../media/experience/cuento.png",
  "../media/experience/personajes.png",
];

const carousel = [
  "/media/experience/car_1.png",
  "/media/experience/car_2.png",
];

const DURATION = 500;

function slide(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const moveTrans = `transform ${DURATION}ms ease, opacity ${DURATION}ms ease`;
  const fadeTrans = `opacity ${DURATION-400}ms ease`;

  const positions = {
    left:  "translateX(-3vw) scale(0.9)",
    center:"translateX(0) scale(1)",
    right: "translateX(3vw) scale(0.9)",
    hidden: "translateX(0) scale(0.5)"
  };

  // --- ANIMATION PHASE ---
  if (direction === "next") {

    // Center → Right
    active.style.transition = moveTrans;
    active.style.transform  = "translateX(17.7vw) scale(0.65)"
    active.style.opacity    = "0.5";

    // Right fades out
    inactive_next.style.transition = fadeTrans;
    inactive_next.style.opacity    = "0";

    // Left → Center
    inactive_prev.style.transition = moveTrans;
    inactive_prev.style.transform  = "translateX(18vw) scale(1.4)"
    inactive_prev.style.opacity    = "1";

    //Hidden -> Left
    hidden.style.transition = moveTrans;
    hidden.style.transform  = "translateX(-22vw) scale(0.6)"
    hidden.style.opacity    = "0.5";
    





  } else {
    // Center → Left
    active.style.transition = moveTrans;
    active.style.transform  = "translateX(-20vw) scale(0.65)"
    active.style.opacity    = "0.5";

    // Right → Center
    inactive_next.style.transition = moveTrans;
    inactive_next.style.transform  = "translateX(-14.5vw) scale(1.4)"
    inactive_next.style.opacity    = "1";

    // Left fades out
    inactive_prev.style.transition = fadeTrans;
    inactive_prev.style.opacity    = "0";

    //Hidden -> Right
    hidden.style.transition = moveTrans;
    hidden.style.transform  = "translateX(17.5vw) scale(0.62)"
    hidden.style.opacity    = "0.5";
  }

  // --- AFTER ANIMATION ---
  setTimeout(() => {

    if (direction === "next") {
        index_next = index_active;
        index_hidden = (index_active - 3 + horses.length) % horses.length;
        index_prev = (index_active - 2 + horses.length) % horses.length; 
        index_active = (index_active - 1 + horses.length) % horses.length; 
    } else { 
        index_prev = index_active;
        index_hidden = (index_active + 3) % horses.length; 
        index_next = (index_active + 2) % horses.length; 
        index_active = (index_active + 1) % horses.length; 
    } 
    
    index_carousel = (index_carousel + 1) % carousel.length;

    // Identify which element is the new incoming one
    const newInactive = direction === "next" ? inactive_next : inactive_prev;

    // --- UPDATE SOURCES ---
    active.src           = horses[index_active];
    inactive_prev.src    = horses[index_prev];
    inactive_next.src    = horses[index_next];
    carousel_element.src = carousel[index_carousel];
    hidden.src = horses[index_hidden];

    // --- RESET POSITIONS (NO FLICKER) ---
    active.style.transition = "none";
    inactive_prev.style.transition = "none";
    inactive_next.style.transition = "none";
    hidden.style.transition = "none";

    active.style.transform        = positions.center;
    inactive_prev.style.transform = positions.left;
    inactive_next.style.transform = positions.right;
    hidden.style.transform = positions.hidden;

    active.style.opacity        = "1";
    inactive_prev.style.opacity = "0.5";
    inactive_next.style.opacity = "0.5";
    hidden.style.opacity = "0";

    // --- PREPARE NEW ELEMENT (hidden but positioned) ---
    newInactive.style.opacity = "0";

    // Let browser apply styles BEFORE animating
    requestAnimationFrame(() => {
      newInactive.style.transition = "opacity 0.4s ease";
      newInactive.style.opacity = "0.5";
    });

    // Unlock animation
    setTimeout(() => { isAnimating = false; }, 400);

  }, DURATION);
}

prev_btn.addEventListener("click", () => slide("prev"));
next_btn.addEventListener("click", () => slide("next"));

