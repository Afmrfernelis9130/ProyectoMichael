
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
let position = document.getElementById("position");
let maritalStatus = document.getElementById("maritalStatus");
let ministry = document.getElementById("ministry");
let status = document.getElementById("status");
let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    registrar()


})






function registrar()  {
   const registro = {};
registro.name=name;
registro.last_name=lastname;
registro.dateOfBirth=dateOfBirth;
registro.placeOfBirth=placeOfBirth;
registro.nationality=nationality;
registro.identityCard=identityCard;
registro.adress=adress;
registro.phone=phone;
registro.email=email;
registro.facebook=facebook;
registro.instagram=instagram;
registro.academicLevel=academicLevel;
registro.numberOfChildren=numberOfChildren;
registro. dateOfConversion=dateOfConversion;
registro.sex=sex;
registro.child=child;
registro.position=position;
registro.maritalStatus=maritalStatus;
registro.ministry=ministry;
registro.status=status;


arr.push(registro);

    console.log(arr)






}

function ErrorForEmail(email) {
    let regax = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    return regax.test(email);
}








