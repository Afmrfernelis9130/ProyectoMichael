const api = "Data/position.json";
const api2 = "Data/maritalStatus.json";
const api3 = "Data/ministry.json";
const api4 = "Data/status.json";
let arr = [];

let name = document.getElementById("validationNombre").value;
let lastname = document.getElementById("validationApellido").value;
let dateOfBirth = document.getElementById("validationFechaN");
let placeOfBirth = document.getElementById("validationLugarN");
let nationality = document.getElementById("validationNacinalidad");
let identityCard = document.getElementById("validationCedula");
let adress = document.getElementById("alidationDireccion");
let phone = document.getElementById("validationTelefono");
let email = document.getElementById("validationCorreo");
let facebook = document.getElementById("validationFB");
let instagram = document.getElementById("validationIG");
let academicLevel = document.getElementById("validationNA");
let numberOfChildren = document.getElementById("numberOfChildren");
let dateOfConversion = document.getElementById("validationFC");
let sex = document.getElementById("sex");
let child = document.getElementById("child");


let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    addUser();


})


document.addEventListener("DOMContentLoaded", () => {

    fetchPosition();
    fetchMaritalStatus();
    fetchMinistry();
    fetchStatus();


});

//llamada a la api
const fetchPosition = async () => {

    try {
        const response = await fetch(api);
        const data = await response.json();

        addPosition(data);

    } catch (error) {
        console.log(error);
    }


}

const fetchMaritalStatus = async () => {

    try {
        const response = await fetch(api2);
        const data = await response.json();

        addMaritalStatus(data);

    } catch (error) {
        console.log(error);
    }


}

const fetchMinistry = async () => {

    try {
        const response = await fetch(api3);
        const data = await response.json();

        addMinistry(data);

    } catch (error) {
        console.log(error);
    }


}

const fetchStatus = async () => {

    try {
        const response = await fetch(api4);
        const data = await response.json();

        addStatus(data);

    } catch (error) {
        console.log(error);
    }


}





//AGREGAR USUARIO
function addUser() {
    const register = {};
    register.name = name;
    register.last_name = lastname;
    register.dateOfBirth = dateOfBirth;
    register.placeOfBirth = placeOfBirth;
    register.nationality = nationality;
    register.identityCard = identityCard;
    register.adress = adress;
    register.phone = phone;
    register.email = email;
    register.facebook = facebook;
    register.instagram = instagram;
    register.academicLevel = academicLevel;
    register.numberOfChildren = numberOfChildren;
    register.dateOfConversion = dateOfConversion;
    register.sex = sex;
    register.child = child;
    register.position = position;
    register.maritalStatus = maritalStatus;
    register.ministry = ministry;
    register.status = status;


    arr.push(register);

    console.log(arr)


}


//cargar datos de la api
function addPosition(position) {

    let positionList = document.getElementById("validationCargo");

//RECORRER ARRAY
    position.forEach((item) => {

        let option = document.createElement("option");  //CREAR ELEMENTO OPTION
        option.setAttribute("value", item.position);//AGREGAR ATRIBUTO VALUE
        let optionText = document.createTextNode(item.position);//LE AGREGA TEXTO A LA OPTION
        option.appendChild(optionText);//INICIALIZA EL ELEMENTO OPTION

        positionList.appendChild(option)//AGREGA EL ELEMENTO OPTION A LA LISTA
    })



}

function addMaritalStatus(status) {

    let statusList = document.getElementById("validationEC");


    status.forEach((item) => {
        let option = document.createElement("option");
        option.setAttribute("value", item.status);
        let optionText = document.createTextNode(item.status);
        option.appendChild(optionText);

        statusList.appendChild(option)
    })



}

function addMinistry(ministry) {

    let ministryList = document.getElementById("validationM");

//RECORRER ARRAY
    ministry.forEach((item) => {

        let option = document.createElement("option");  //CREAR ELEMENTO OPTION
        option.setAttribute("value", item.ministry);//AGREGAR ATRIBUTO VALUE
        let optionText = document.createTextNode(item.ministry);//LE AGREGA TEXTO A LA OPTION
        option.appendChild(optionText);//INICIALIZA EL ELEMENTO OPTION

        ministryList.appendChild(option)//AGREGA EL ELEMENTO OPTION A LA LISTA
    })



}

function addStatus(status) {

    let ministryList = document.getElementById("validationEstado");

//RECORRER ARRAY
    status.forEach((item) => {

        let option = document.createElement("option");  //CREAR ELEMENTO OPTION
        option.setAttribute("value", item.status);//AGREGAR ATRIBUTO VALUE
        let optionText = document.createTextNode(item.status);//LE AGREGA TEXTO A LA OPTION
        option.appendChild(optionText);//INICIALIZA EL ELEMENTO OPTION

        ministryList.appendChild(option)//AGREGA EL ELEMENTO OPTION A LA LISTA
    })



}





function ErrorForEmail(email) {
    let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    return regax.test(email);
}









