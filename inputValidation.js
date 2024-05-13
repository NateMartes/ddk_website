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
document.getElementById("emailSubject").addEventListener("input", function(){
    let name = this.value
    if (name == ""){
        this.setCustomValidity("Name Cannot Be Empty");
    }
});