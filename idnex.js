var tm = gsap.timeline()

tm.from(".hero-nav",{
    opacity: 0,
    scale:1.05,
    duration:1.5    
})
tm.from(".nav li",{
    y:-20,
    stagger:0.5,
    scale:1.05
})

tm.from(".hero-text h3",{
    zIndex:-1,
    x:-500,
    duration:2,
    ease:"elastic"
})
tm.from(".hero-text h2",{
    zIndex:-1,
    x:-500,
    duration:2,
    ease: "slow"
})
tm.from(".hero-text h4",{
    zIndex:-1,
    x:-500,
    duration:2,
    ease:"elastic"
})

tm.from(".hero-text a",{
    zIndex:-1,
    x:-500,
    duration:3,
    scale:.5,
    ease:"circ.out"
})
// nav animation

const navMenu= document.querySelector(".nav-res");
const classMenu= document.querySelector(".lola");

const hamberg = document.querySelector(".nav-icon");

hamberg.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-res-seen");
    // navMenu.classList.toggle("lola");

})
