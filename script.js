document.addEventListener("DOMContentLoaded", function ()   {
    const formProgress = document.getElementById("formProgress");
    const inputFields = [
        {   element: document.getElementById("FullNameInput"), validate: validateFullName },
        {   element: document.getElementById("ageInput"), validate: validateAge },
        {   element: document.getElementById("emailInput"), validate: validateEmail },
        {   element: document.getElementById("dobInput"), validate: validateDateOfBirth },
    ];
    
    function validateFullName(input)    {
        return /^[A-Za-z\s]+$/.test(input.value);
    }
    function validateAge(input) {
        const age = parseInt(input.value, 10);
        return !isNaN(age) && age > 0 && age <= 100;
    }
    function validateEmail(input)   {
        return /\S+@\S+\.\S+/.test(input.value);
    }
    function validateDateOfBirth(input) {
        return input.value.trim() !=="";
    }
    function updateProgressBar()    {
        const validInputCount = inputFields.reduce((count, field) => {
            if (field.validate(field.element))  {
                return count + 1;
            }
            return count;
        }, 0 );
        const progress = (validInputCount / inputFields.length) * 100;
        formProgress.style.width = progress + "%";
        formProgress.innerText = progress + "%";
    }

    function validateInputs()   {
        inputFields.forEach((field) => {
            const input = field.element;
            if (input.value.trim() === ""){
                input.classList.remove("is-invalid", "is-valid");
            } else if (field.validate(input)) {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
            } else {
                input.classList.remove("is-valid");
                input.classList.add("is-invalid");
            }
        });
        updateProgressBar();
    }
    inputFields.forEach((field) => {
        field.element.addEventListener("input", validateInputs);
    });

    validateInputs();
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAndShowAboutMe() {
    var aboutMeSection = document.getElementById('about');

    if (isElementInViewport(aboutMeSection)) {
        aboutMeSection.style.display = 'block'; 
        window.removeEventListener('scroll', checkAndShowAboutMe); 
    }
}
window.addEventListener('scroll', checkAndShowAboutMe);
function checkAndShowPortfolio() {
    var portfolioSection = document.getElementById('portfolio');

    if (isElementInViewport(portfolioSection)) {
        portfolioSection.style.display = 'block'; 
        window.removeEventListener('scroll', checkAndShowPortfolio); 
    }
}

window.addEventListener('scroll', checkAndShowPortfolio);

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}
// TAN, Ma. Khella M.
