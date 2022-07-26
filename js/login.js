const api = "Data/user.json";
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
let isLogged = false;


btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();


});


const fetchData = async () => {

    try {
        const response = await fetch(api);
        const data = await response.json();

        login(data)

    } catch (error) {
        console.log(error);
    }

}


const login = (data) => {

    let u = username.value.trim();
    let p = password.value.trim();

    data.forEach(element => {

        if (element.username === u && element.password === p) {
            console.log("Login Successful")
            window.location.href = "index.html";
            isLogged = true;


        }
        if (element.username !== u && element.password !== p && !isLogged) {

           console.log("Login Failed")


        }
        if (u === "" && !isLogged) {


            alert("Please enter your username");

            isLogged = true;

        }
        if (u === "" && p === "" && !isLogged) {

            alert("Please enter your username and password");
            isLogged = true;

        }
        if (p === "" && !isLogged) {

            alert("Please enter your password");
            isLogged = true;
        }


    })


}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'field error';
    small.innerText = message;
}

function setErrorForEmail(email) {
    let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    return regax.test(email);
}
