import { gsap } from "gsap";

const t1 = gsap.timeline({ defaults: { ease: "power1.out "}});
const stopAnimation = () => {
    t2.pause(0);
}

const t2 = gsap.timeline({ defaults: { ease: "power1.out "}, onComplete: stopAnimation});
// const t2 = gsap.TimelineMax({ defaults: { ease: "power1.out "}});

export const triggerAnimation = () => {
    t1.to(".welcome ", { y: "0%", duration: 1.5, stagger: 1})
    t1.fromTo(".ps1 ", { opacity: 0 }, { opacity: 1, duration: 1})
   
}

export const triggerAnimationOnClick = ( ) => {
    t1.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5})
    t1.to(".intro", { y: "-100%", duration: 1}, "-=1")
    t1.fromTo(".hero-container", { opacity: 0 }, { opacity: 1, duration: 1})
}


// create a reusable effect that swaps text

    gsap.registerEffect({
        name: "swapText",
        effect: (targets, config) => {
          let tl = gsap.timeline({delay: config.delay});
          tl.to(targets, {opacity: 0, duration: config.duration / 2});
          tl.add(() => targets[0].innerText = config.text);
          tl.to(targets, {opacity: 1, duration: config.duration});
          return tl;
        },
        defaults: {duration: 1}, 
        extendTimeline: true,
    });

    export const reset = () => {
        t2.invalidate().restart();
    }

export const triggerCutetalAnimation = () => {
    t2.invalidate().restart();
t2.swapText(".welcomeCute", {text: "What"})
.swapText(".welcomeCute", {text: "Being", delay: 1})
.swapText(".welcomeCute", {text: "Cute", delay: 1})
.swapText(".welcomeCute", {text: "and", delay: 1})
.swapText(".welcomeCute", {text: "Mental", delay: 1})
.swapText(".welcomeCute", {text: "Gets", delay: 1})
.swapText(".welcomeCute", {text: "you", delay: 1})
.swapText(".welcomeCute", {text: "C.U.T.E.N.T.A.L", delay: 1});

}