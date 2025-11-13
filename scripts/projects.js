(function () {
                const section = document.querySelector('.webProjects');
                if (!section) return;

                const cards = Array.from(section.querySelectorAll('.wpCard'));
                const STAGGER = 150; // ms between each card

                function revealCards() {
                cards.forEach((card, i) => {
                    setTimeout(() => card.classList.add('in'), i * STAGGER);
                });
                }

                if ('IntersectionObserver' in window) {
                const obs = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        revealCards();
                        observer.unobserve(entry.target);
                    }
                    });
                }, { threshold: [0, 0.5, 1] });

                obs.observe(section);
                } else {
                // fallback: reveal immediately
                revealCards();
                }
            })();