// Menu navbar
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
}


// email js

function validate() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");
    let sendBtn = document.querySelector(".send-btn");
    sendBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}

validate();

function sendmail(name,email,msg) {
    success();
    emailjs.send("service_rlljobe","template_072zwfm",{
        to_name: email,
        from_name: name,
        message: msg,
    });
}

function emptyerror() {
    Swal.fire({
        icon: 'error',
        title: 'Oh No...',
        text: 'Fields cannot be empty',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
}

function success() {
    Swal.fire({
        icon: 'success',
        title: 'Email Sent Successfully',
        text: 'We try reply in 24 hours',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    })
}

// Header back change on scroll 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0);
})

// scroll
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY >= 400);
})