const text = "This is how Reels text animations work!";
const container = document.getElementById("animated-text");

container.innerHTML = ""; // Clear default text

// Create spans for each letter
text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  span.style.display = "inline-block";
  span.style.filter = "blur(5px)";
  container.appendChild(span);
});

// GSAP animation with blur, scale and bounce
gsap.fromTo("#animated-text span", 
  {
    opacity: 0,
    scale: 0.3,
    y: 40,
    filter: "blur(5px)",
    rotateX: -90
  },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    ease: "back.out(1.7)",
    duration: 0.8,
    stagger: 0.05,
    delay: 0.5
  }
);
