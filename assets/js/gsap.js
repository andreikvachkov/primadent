window.addEventListener('load', function () {

    console.log('GSAP loaded');

    gsap.to(".services__bg1", {
        yPercent: 3000,
        scale: 10,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });

    gsap.to(".services__bg2", {
        yPercent: 1000,
        scale: 5.5,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });

    gsap.to(".services__bg3", {
        yPercent: 200,
        scale: 0.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg4", {
        yPercent: 1000,
        scale: 2.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg5", {
        yPercent: 2000,
        scale: 6,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg6", {
        yPercent: 700,
        scale: 10.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg7", {
        yPercent: 500,
        scale: 0.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg8", {
        yPercent: 300,
        scale: 0.4,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".services__bg9", {
        yPercent: 200,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    gsap.to(".about-info__bg", {
        yPercent: 200,
        scale: 3,
        ease: "none",
        scrollTrigger: {
            trigger: ".about-info",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
    });
    // gsap.registerPlugin(ScrollTrigger);

    // const items = gsap.utils.toArray(".about__item");
    // const itemHeight = items[0].offsetHeight;
    // const totalHeight = (itemHeight + 20) * items.length; 

    // function logPositions() {
    //     items.forEach((item, index) => {
    //         const computedTransform = window.getComputedStyle(item).transform;
    //         const matrix = new WebKitCSSMatrix(computedTransform);
    //         console.log(`Блок ${index + 1}: смещение transform = ${matrix.m42}px`);
    //     });
    // }

    // gsap.fromTo(items,
    //     { y: (i) => i * itemHeight },
    //     {
    //         y: 0,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: ".about",
    //             start: "top top",
    //             end: `+=${totalHeight}px`,
    //             scrub: true,
    //             pin: true,
    //             markers: true,
    //             onUpdate: logPositions
    //         }
    //     }
    // );


    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".about__item");
    const itemHeight = items[0].offsetHeight;
    const totalHeight = itemHeight * (items.length - 1);
    const isMobile = window.innerWidth <= 768;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: isMobile ? `+=${itemHeight}px` : "top top" ,
            end: `+=${totalHeight}px`,
            scrub: true,
            pin: true,
        }
    });
    
    gsap.set(items[0], { y: 0 });
    
    items.slice(1).forEach((item, index) => {
        tl.fromTo(item,
            { y: '200%' }, 
            { y: 0, ease: "none" }, 
            index * 0.5
        );
    });


});