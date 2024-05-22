const form  = document.querySelector('#form');
const fname = document.querySelector('#first-name');
const lname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const contact = document.querySelector('#number');
const pass1 = document.querySelector('#password1');
const pass2 = document.querySelector('#password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInput();
})

function setError(element, message){
    const inputControl = element.parentElement;
    const errorText = inputControl.querySelector('.error');

    errorText.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorText = inputControl.querySelector('.error');

    errorText.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateInput() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const contactValue = contact.value.trim();
    const pass1Value = pass1.value.trim();
    const pass2Value = pass2.value.trim();

    if (fnameValue === '') {
        setError(fname, '*Firstname is required!');
    } else {
        setSuccess(fname);
    }

    if (lnameValue === '') {
        setError(lname, '*Lastname is required!');
    } else {
        setSuccess(lname);
    }

    if (emailValue === '') {
        setError(email, '*Email address is required!');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Enter a valid Email address!');
    }  else {
        setSuccess(email);
    }

    if (contactValue === '') {
        setError(contact, '*Contact number is required!');
    } else {
        setSuccess(contact);
    }

    if (pass1Value === '') {
        setError(pass1, '*Password is required!');
    } else {
        setSuccess(pass1);
    }

    if (pass2Value === '') {
        setError(pass2, '*Password is required!');
    } else if (pass1Value !== pass2Value){
        setError(pass2, '*Passwords do not match!')
    } else {
        setSuccess(pass2);
    }
}

function isValidEmail(email){
    const req = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return req.test(String(email).toLowerCase());
}