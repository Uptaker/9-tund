window.onload = function () {
    document.querySelector("#contactSubmit").addEventListener("click", checkInputs);
};

function checkInputs() {
    let name = document.querySelector("#fname").value;
    let email = document.querySelector("#email").value;
    let pnumber = document.querySelector("#pnumber").value;
    let additional = document.querySelector("#additional").value;
    let notification = document.querySelector("#notification");

    if (checkEmail(email)) {
        if (checkPhone(pnumber)) {
            if (name.length > 0) {
                if (additional.length > 0) {
                    notification.innerHTML = `Andmed saadetud! Aitäh, ${name}.`;
                    notification.classList.remove("failed");
                    notification.classList.add("passed");
                    setTimeout(() => {
                        notification.innerHTML = ``;
                        notification.classList.remove("passed");
                    }, 5000);
                } else {
                    notification.innerHTML = `Sõnum ei saa olla tühi!`;
                    notification.classList.remove("passed");
                    notification.classList.add("failed");
                }
            } else {
                notification.innerHTML = `Nimi ei saa olla tühi!`;
                notification.classList.remove("passed");
                notification.classList.add("failed");
            }
        }
    }
}

function checkEmail(email) {
    let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length == 0) {
        notification.classList.remove("passed");
        notification.classList.add("failed");
        notification.innerHTML = `E-mail ei saa olla tühi!`;
        return false;
    } else {
        if (!filter.test(email)) {
            notification.innerHTML = `Teie e-mail, ${email}, ei ole kehtiv. Palun sisestage Kehtiva e-maili`;
            notification.classList.remove("passed");
            notification.classList.add("failed");
            return false;
        } else {
            return true;
        }
    }
}

function checkPhone(phone) {
    let filter = /^(?:[+\d].*\d|\d)$/;
    if (phone.length == 0) {
        notification.classList.remove("passed");
        notification.classList.add("failed");
        notification.innerHTML = `Telefoninumber ei saa olla tühi!`;
        return false;
    } else {
        if (!filter.test(phone)) {
            notification.innerHTML = `Teie number, ${phone}, ei ole kehtiv. Palun sisestage Kehtiva e-maili`;
            notification.classList.remove("passed");
            notification.classList.add("failed");
            return false;
        } else {
            return true;
        }
    }
}
