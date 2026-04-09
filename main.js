document.addEventListener('DOMContentLoaded', function () {
    // 1. EmailJS Logic
    emailjs.init("za8O_IkA2bNo9fLkg");

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = {
                company: document.getElementById('company').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
            };
            emailjs.send("service_6ixpo68", "template_gy5emvk", formData)
                .then(function () { alert('Success!'); })
                .catch(function (error) { alert('Failed.'); });
        });
    }

    // 2. 3D Carousel Logic
    const stage = document.getElementById("stage");
    const carousel = document.getElementById("carousel");

    if (stage && carousel) {
        const cards = [...carousel.children];
        const COUNT = cards.length;
        const RADIUS = 1200;
        const SENS_Y = 0.22;
        const SENS_X = 0.12;

        let rotY = 0;
        let rotX = 0;
        let isDown = false;
        let startX = 0, startY = 0;
        let startRotY = 0, startRotX = 0;

        const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

        cards.forEach((card, i) => {
            const angle = (360 / COUNT) * i;
            card.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;
        });

        const render = () => {
            const safeX = clamp(rotX, -15, 15);
            carousel.style.transform = `rotateX(${safeX}deg) rotateY(${rotY}deg)`;
            requestAnimationFrame(render);
        };

        const down = (clientX, clientY) => {
            isDown = true;
            startX = clientX; startY = clientY;
            startRotY = rotY; startRotX = rotX;
        };

        const move = (clientX, clientY) => {
            if (!isDown) return;
            rotY = startRotY + (clientX - startX) * SENS_Y;
            rotX = startRotX - (clientY - startY) * SENS_X;
        };

        const up = () => { isDown = false; };

        stage.addEventListener("mousedown", e => down(e.clientX, e.clientY));
        window.addEventListener("mousemove", e => move(e.clientX, e.clientY));
        window.addEventListener("mouseup", up);
        stage.addEventListener("touchstart", e => down(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
        stage.addEventListener("touchmove", e => move(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
        stage.addEventListener("touchend", up);

        render();
    }
});