function setThemeByTime() {
  const hour = new Date().getHours();
  const contactIcons = document.querySelectorAll('.contactIcon');
  const maskImgs = document.querySelectorAll('.maskImg');
  const actionPower = document.getElementById('actionPower');

  if (hour >= 6 && hour < 18) {
    // Light mode
    document.body.classList.remove('dark-mode');
    actionPower?.classList.remove('dark-mode');

    contactIcons.forEach(icon => icon.classList.remove('dark-mode'));
    maskImgs.forEach(img => img.classList.remove('dark-mode'));
  } else {
    // Dark mode
    document.body.classList.add('dark-mode');
    actionPower?.classList.add('dark-mode');

    contactIcons.forEach(icon => icon.classList.add('dark-mode'));
    maskImgs.forEach(img => img.classList.add('dark-mode'));
  }
}

setThemeByTime();

window.onbeforeunload = () => window.scrollTo(0, 0);




document.addEventListener("DOMContentLoaded", function() {
    const contactSection = document.querySelector('.contact');
    const contactH2 = contactSection.querySelector('h2');
    const contactForm = contactSection.querySelector('form');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactH2.classList.add('animate-in');
                    contactForm.classList.add('animate-in');
                }
            }); 
        },
        { threshold: 0.3 }
    );

    observer.observe(contactSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const projectOthers = document.getElementById('projectOthers');
  const boxes = document.querySelectorAll('.projDescBox');

  function animateProjectBoxes(entries, observer) {
    const entry = entries[0];

    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      boxes.forEach((box, i) => {
        box.style.transform = 'rotate(25deg)';
        box.style.scale = '0.9';
        box.style.transition = 'transform 0.6s ease';
        box.style.transitionDelay = `${i * 100}ms`;
      });

      // Optional: trigger only once
      observer.unobserve(entry.target);
    } else {
      boxes.forEach(box => {
        box.style.transform = 'rotate(0deg)';
        box.style.scale = '1';
        box.style.transition = 'transform 0.4s ease';
        box.style.transitionDelay = '0ms';
      });
    }
  }

  if (projectOthers) {
    const observer = new IntersectionObserver(animateProjectBoxes, {
      threshold: [0.1, 0.5, 1]
    });
    observer.observe(projectOthers);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function handleAboutSectionAnimation() {
    const aboutSection = document.querySelector('.about');
    const aboutButtonprimary = aboutSection.querySelector('.btn-primary');
    const aboutButtonsecondary = aboutSection.querySelector('.btn-secondary');

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutButtonprimary.classList.add('animate');
            aboutButtonsecondary.classList.add('animate');
            observerInstance.unobserve(entry.target); // Optional: animate once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    observer.observe(aboutSection);
  }

  handleAboutSectionAnimation();
});