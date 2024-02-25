// create a timeline
let tl = gsap.timeline()

// add the tweens to the timeline - Note we're using tl.to not gsap.to
tl.from(".head", { x: "600vw", duration: 2 });
tl.from(".box_A", { x: "600vw", duration: 1 });
tl.from(".box1", { x: "600vw", duration: 1 });
tl.from(".box2", { x: "600vw", duration: 2 });
tl.from(".box3", { x: "600vw", duration: 1 });
tl.from(".box4", { x: "600vw", duration: 1 });