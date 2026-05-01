
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    // Show main content
    content.style.display = "block";

    // Fade out preloader
    setTimeout(() => {
      preloader.classList.add("hidden");
    });
  });


  


// Disable scroll on animation load

  window.addEventListener("load", () => {
  const box = document.getElementById("estima-logo-main");

      // Lock scroll
      document.body.classList.add("no-scroll");

      // Unlock when animation ends
      box.addEventListener("animationend", () => {
        document.body.classList.remove("no-scroll");
      }, { once: true });
    });




// Intro Animation

 document.addEventListener("DOMContentLoaded", function () {
  
  const section = document.querySelector(".intro");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("show");


          // run once only
          observer.unobserve(section);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  observer.observe(section);



// Modal Animation 

    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");

    document.querySelectorAll(".grid-card").forEach(item => {
      item.addEventListener("click", () => {
        const videoID = item.getAttribute("data-video");

        iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
        modal.classList.add("show");
      });
    });

    window.closeVideo = function () {
      modal.classList.remove("show");
        // delay clearing video for smooth close animation
      setTimeout(() => {
        iframe.src = "";
      }, 400);
    };
  
});



// Changing Video Background for Hero Ad

  const video = document.getElementById("bg-video");

  function setVideoSource() {
    if (window.innerWidth <= 768) {
      video.src = "../video/singin-queen.mp4";   // 📱 mobile video
    } else {
      video.src = "../video/singin-queen.mp4";  // 💻 desktop video
    }
  }

  // Run on load
  setVideoSource();

  // Run when resizing screen
  window.addEventListener("resize", setVideoSource);