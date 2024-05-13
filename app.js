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

/* form error checking */
document.getElementById("name").addEventListener("input", function(){
    let name = this.value
    if (name == ""){
        this.setCustomValidity("Name Cannot Be Empty");
    } else {
        this.setCustomValidity("");
    }
});
document.getElementById("phoneNumber").addEventListener("input", function(){
    let regex = /^\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}$/;
    if (!regex.test(this.value)){
        this.setCustomValidity("Ex : 123-456-0000");
    }else {
        this.setCustomValidity("");
    }
});
document.getElementById("email").addEventListener("input", function(){
    let regex = /^.+@.+$/;
    if (!regex.test(this.value)){
        this.setCustomValidity("Ex : johndoe@ddk.com");
    } else {
        this.setCustomValidity("");
    }
});
document.getElementById("subject").addEventListener("input", function(){
    let name = this.value
    if (name == ""){
        this.setCustomValidity("Name Cannot Be Empty");
    }
});
