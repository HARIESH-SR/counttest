const navBar = document.querySelector("nav"),
       menuBtns = document.querySelectorAll(".menu-icon"),
       overlay = document.querySelector(".overlay");

      

     menuBtns.forEach((menuBtn) => {
       menuBtn.addEventListener("click", () => {
         navBar.classList.toggle("open");
       });
     });

     overlay.addEventListener("click", () => {
       navBar.classList.remove("open");
     });
     function animateCount(id, start, end, duration) {
      let element = document.getElementById(id);
      let range = end - start;
      let startTime = null;

      function step(currentTime) {
          if (!startTime) startTime = currentTime;
          let progress = currentTime - startTime;
          let count = Math.min(Math.floor((progress / duration) * range + start), end);
          element.textContent = count.toLocaleString();
          if (progress < duration) {
              requestAnimationFrame(step);
          }
      }

      requestAnimationFrame(step);
  }

  document.addEventListener('DOMContentLoaded', () => {
      const statsContainer = document.getElementById('stats-container');

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateCount('views', 0, 67000, 1200); // 3 seconds duration for views
                  animateCount('users', 0, 13000, 1200); // 3 seconds duration for users
                  observer.unobserve(statsContainer); // Stop observing after animation starts
              }
          });
      }, { threshold: 0.6 }); // Trigger when 50% of the element is in view

      observer.observe(statsContainer);
  });
