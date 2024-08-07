document.addEventListener('DOMContentLoaded', () => {
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
            markers: true
        },
    });

    gsap.to(".services__bg2", {
        yPercent: 1500,
        scale: 5.5,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true
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
            markers: true
        },
    });
    gsap.to(".services__bg4", {
        yPercent: 200,
        scale: 0.3,
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: true
        },
    });
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".about__item");

    gsap.fromTo(items,
        { top: (i) => `${i * 110}%` },
        {
            top: "0%",
            ease: "none",
            scrollTrigger: {
                trigger: ".about",
                start: "top top",
                end: "+=" + (items.length * 110) + "%",
                scrub: true,
                pin: true,
                markers: true // Включите для отладки
            }
        }
    );
});