const api = "prueba.json";

const btnBuscar = document.getElementById("btnBuscar");
const filtro = document.getElementById("validationFiltro");
let inputBuscar = document.getElementById("inputBuscar");
let table = document.querySelector("table");
let tableBody = document.createElement("tbody");
let arr = [];
let btnClick = false;
let findOn = false;


document.addEventListener("DOMContentLoaded", () => {

    fetchData();


});

btnBuscar.addEventListener("click", () => {
    btnClick = true;

    fetchData();
});

const fetchData = async () => {

    try {
        const response = await fetch(api);
        const data = await response.json();

        if (btnClick === true) {

            findData(data)
        } else {
            readData(data)
        }

    } catch (error) {
        console.log(error);
    }

}


readData = (data) => {


    data.forEach((item) => {
        let fila = document.createElement("tr");

        let td = document.createElement("td");


        td.innerHTML = item.id;
        fila.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = item.username;
        fila.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = item.pass;
        fila.appendChild(td);


        td = document.createElement("td");
        td.innerHTML = item.email;
        fila.appendChild(td);


        td = document.createElement("td");
        td.innerHTML = item.name;
        fila.appendChild(td);

        tableBody.appendChild(fila);


    });

    table.appendChild(tableBody);

}


findData = (data) => {


 const prueba= data.filter((item) =>  item.username === inputBuscar.value)

    addData(prueba);


}

function addData(arr){


    arr.forEach((element) => {

        let fila = document.createElement("tr");
                let td = document.createElement("td");


                td.innerHTML = element.id;
                fila.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = element.username;
                fila.appendChild(td);

                td = document.createElement("td");
                td.innerHTML = element.pass;
                fila.appendChild(td);


                td = document.createElement("td");
                td.innerHTML = element.email;
                fila.appendChild(td);


                td = document.createElement("td");
                td.innerHTML = element.name;
                fila.appendChild(td);

                tableBody.innerHTML = "";
                tableBody.appendChild(fila);

                findOn = true;

            });

            table.appendChild(tableBody);

}


// findData = (data) => {
//
//     let text = inputBuscar.value;
//
//
//     data.filter((item) => {
//
//
//         if (item.username === text) {
//             console.log(item);
//
//             arr.push(item);
//            // console.log(arr);
//
//             arr.forEach((element) => {
//
//                 // console.log(element);
//
//                 let fila = document.createElement("tr");
//                 let td = document.createElement("td");
//
//
//                 td.innerHTML = element.id;
//                 fila.appendChild(td);
//
//                 td = document.createElement("td");
//                 td.innerHTML = element.username;
//                 fila.appendChild(td);
//
//                 td = document.createElement("td");
//                 td.innerHTML = element.pass;
//                 fila.appendChild(td);
//
//
//                 td = document.createElement("td");
//                 td.innerHTML = element.email;
//                 fila.appendChild(td);
//
//
//                 td = document.createElement("td");
//                 td.innerHTML = element.name;
//                 fila.appendChild(td);
//
//                 tableBody.innerHTML = "";
//                 tableBody.appendChild(fila);
//
//                 findOn = true;
//
//             });
//
//             table.appendChild(tableBody);
//
//
//
//         } else if (!findOn) {
//             console.log("No se encontro");
//         }
//
//     })
//
//
// }




