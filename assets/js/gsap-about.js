window.addEventListener('load', function () {

    console.log('GSAP loaded');

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


    const items2 = gsap.utils.toArray(".about_about__item");
    const itemHeight2 = items2[0].offsetHeight;
    const containerHeight = document.querySelector(".about_about__left").offsetHeight;
    const totalHeight2 = itemHeight2 * (items2.length - 1);
    const isMobile = window.innerWidth <= 768;
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about_about",
            start: isMobile ? `+=${containerHeight}px` : `-=${itemHeight2 / 3}px`,
            end: `+=${totalHeight2}px`,
            scrub: true,
            pin: true,
        }
    });

    gsap.set(items2[0], { y: 0 });

    items2.slice(1).forEach((item, index) => {
        tl2.fromTo(item,
            { y: '200%' },
            { y: 0, ease: "none" },
            index * 0.5
        );
    });

    gsap.registerPlugin(ScrollTrigger);

    function animateNumbers() {
        document.querySelectorAll('.about-advantages__number').forEach(numberElem => {
            const endValue = parseInt(numberElem.textContent.replace(/\s/g, ''), 10);

            gsap.fromTo(numberElem, 
                {
                    innerHTML: 0
                }, 
                {
                    innerHTML: endValue,
                    duration: 1.5,
                    ease: "power1.out",
                    snap: { innerHTML: 1 },
                    onUpdate: function() {
                        numberElem.innerHTML = Math.round(numberElem.innerHTML);
                    },
                    scrollTrigger: {
                        trigger: numberElem,
                        start: "top 80%",
                        once: true
                    }
                }
            );
        });
    }

    animateNumbers();
});