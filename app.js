/* window animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* scroll to ids */
function scrollAnimation(event, element){
    console.log(element);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion){
        return;
    }
    event.preventDefault();
    const targetId = element.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
    })
}

/* toggle  hamburger content */
function hamburgerContentAnimation(){
    const hamburgerContent = document.querySelector(".hamburgerIconContents");
    hamburgerContent.classList.toggle("showHamburgerContents");
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
