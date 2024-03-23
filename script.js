
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.update();

  const boxes = document.querySelectorAll('.box');
  const infos = document.querySelectorAll('.info');

  boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
      boxes.forEach((otherBox, otherIndex) => {
        if (otherIndex !== index) {
          gsap.to(otherBox, { opacity: 0 });
        }
      });
      infos.forEach(info => {
        info.style.display = 'none';
        gsap.set(info, { opacity: 0 });
      });

      infos[index].style.display = 'block';
      gsap.fromTo(infos[index], { opacity: 0, y: -220 }, { opacity: 1, y: 0, duration: 0.5 });
    });

    box.addEventListener('mouseleave', () => {
      boxes.forEach((otherBox) => {
        gsap.to(otherBox, { opacity: 1 });
      });
      infos.forEach(info => {
        info.style.display = 'none';
        gsap.set(info, { opacity: 0 });
      });
    });
  });
 
  Shery.makeMagnet(".box", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1
  });

  Shery.textAnimate(".part h2", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from('#box1, #box3, #box5', {
    y: -320,
    duration: 1.3,
    opacity: 0,
    stagger: 0.5,
    ease: 'power2.out',
  });

  gsap.from('#box2, #box4', {
    y: 320,
    duration: 1.3,
    opacity: 0,
    stagger: 0.5,
    ease: 'power2.out',
  });
});





 


