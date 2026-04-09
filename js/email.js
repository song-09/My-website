document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("za8O_IkA2bNo9fLkg");

    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = {
                company: document.getElementById('company').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
            };

            emailjs
                .send("service_6ixpo68", "template_gy5emvk", formData)
                .then(function (response) {
                    alert('Your message has been sent successfully. Thank you!');
                    location.href = './index.html';
                })
                .catch(function (error) {
                    console.error('Failed to send email:', error);
                    alert('Something went wrong. Please try again later.');
                });
        });
});