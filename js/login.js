const api = "Data/user.json";
const btn= document.getElementById('btn');
const username= document.getElementById('username');
const password= document.getElementById('password');




btn.addEventListener('click',()=>{

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






const login= (data)=>{

    let u=username.value;
    let p=password.value;

    data.forEach(element => {
        if(element.username==u && element.password==p){
            alert("Login Successful");
            window.location.href="index.html";
        }
    });

}