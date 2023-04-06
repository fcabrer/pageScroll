setTimeout(function(){
    document.querySelector(".loading").remove()
},3000);




gsap.to("#zapas",{
    scrollTrigger:{
        scrub:0.5
    },
    scale:1.1
})
gsap.to("#luna",{
    scrollTrigger:{
        scrub:0.5
    },
    scale:1.5
})

gsap.to("#clouds_1",{
    scrollTrigger:{
        scrub:1
    },
    x:-200
})
gsap.to("#clouds_2",{
    scrollTrigger:{
        scrub:1
    },
    x:200
})
gsap.to("#clouds_3",{
    scrollTrigger:{
        scrub:1
    },
    x:-200
})
gsap.to("#text",{
    scrollTrigger:{
        scrub:-0.1
        
    },
    y:550
})
gsap.to("#lunaInf",{
    scrollTrigger:{
        scrub:5
    },
    y:500
})
