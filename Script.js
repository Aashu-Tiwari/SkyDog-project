gsap.to(".nav .logo img",{
    top:"4%",opacity:1,
    ease:Power1,
    duration:2,
    delay:2
})

gsap.to(".text h1 span",{
    left:"-75%",
    ease:Power1,
    duration:2,
    delay:4
})





var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#section1",
        scroller:"#section1",
        start:"top top",
        markers:true,
        scrub:1
    }
})

// t1.to(".nav .logo img",{
//     opacity:1,
//     ease:Power1,
//     duration:1
// })