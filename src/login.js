const form = document.getElementById('form');
const username = document.getElementById('username');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    if(!validateInputs()){
        e.preventDefault();
    }else{
        const url = 'http://localhost:3000/application.html';
        window.location.href = url;
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    return false;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    return true;
};

const isValidUsername = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Email is required');
    }else if (!isValidUsername(usernameValue)) {
        setError(username, 'Provide a valid email address');
    }  else {
        return true;
    }

    if(password2Value === '') {
        setError(password2, 'Please enter your password');
    }  else if (password2Value.length < 8 ) {
        setError(password2, 'Password must be at least 8 character.')
    } else {
        return true;
    }
};
