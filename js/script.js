
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("main-content");

    // Show main content
    content.style.display = "block";

    // Fade out preloader
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 500);
  });


// Intro Animation

 document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".intro");

  if (!section) {
    console.error("Section not found");
    return;
  }

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
      threshold: 0.8
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




  