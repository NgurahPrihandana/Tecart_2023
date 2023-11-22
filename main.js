const submit = document.getElementById("submit");

let fieldEmail = document.querySelector("input[name=email]");

let errorEmail = document.getElementById("text-error-email");

fieldEmail.addEventListener("keyup",checkEmail);

submit.addEventListener("click", validate);

function checkEmail(e) {
    let regex = /^(([^<>()`'_[\]\\.,;:\s@"]+(\.[^<>()`'_[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(regex.test(fieldEmail.value.toLowerCase())) {
        errorEmail.classList.replace("visibility-show","visibility-hide");
        fieldEmail.classList.remove("error-input")
      return true;
    } else if(fieldEmail.value.toLowerCase() == ''){
        errorEmail.classList.replace("visibility-show","visibility-hide");
        fieldEmail.classList.remove("error-input")
    } else {
        errorEmail.classList.replace("visibility-hide","visibility-show");
        fieldEmail.classList.add("error-input")
      return false;
    }
}

function validate(e) {
    if(fieldEmail.value.toLowerCase() == '') {
        e.preventDefault();
        alert("Data tidak boleh dikosongkan");
    } else if(errorEmail.classList.contains("visibility-show")){
        e.preventDefault();
        alert("Input anda masih salah");
    } else {
        // do nothing
    }
}