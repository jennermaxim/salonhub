let send = document.querySelector(".send");
let close = document.querySelector(".close");
let closeFailed = document.querySelector(".close-failed");
let model = document.querySelector(".model");
let failed = document.querySelector(".failed");

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_sh26x5v', 'template_x7928zo', this)
            .then(() => {
                model.classList.add("open");
                this.reset();
                setTimeout(() => {
                    model.classList.remove("open");
                }, 15000);
            }, (error) => {
                failed.classList.add("open");
                setTimeout(() => {
                    failed.classList.remove("open");
                }, 15000);
                console.log('FAILED...', error);
            });
    });
}


close.onclick = () => {
    model.classList.remove("open");
}

closeFailed.onclick = () =>{
    failed.classList.remove("open");
}