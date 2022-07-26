const api = "Data/user.json";
const btn = document.getElementById('btn');
const username = document.getElementById('username');
const password = document.getElementById('password');
let isLogged = false;


btn.addEventListener('click', () => {

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

    let u = username.value;
    let p = password.value;

    data.forEach(element => {

        if (element.username === u && element.pass === p) {
            console.log("Login Successful")
            window.location.href = "index.html";
            isLogged = true;


        }
        if (element.username !== u && element.pass !== p && !isLogged) {

            console.log("Login Failed")

        }
        if (u === "" && !isLogged) {

            console.log("The username field is required")


        }
        if (u === "" && p === "" && !isLogged) {
            console.log("The username field is required")


        }
        if (p === "" && !isLogged) {
            console.log("The password field is required");

            return false;

        }


    })


}




