const api = "prueba.json";

const bntBuscar = document.getElementById("btnBuscar");
let inputBuscar;
// let inputBuscar = inputBuscar= document.getElementById("inputBuscar").value;

document.addEventListener("DOMContentLoaded",() => {

fetchData();


});

// bntBuscar.addEventListener("click",(e) => {
//
//     e.preventDefault();
//
//
// })


const fetchData = async () => {

    try {
        const response = await fetch(api);
        const data = await response.json();
         readData(data);
        // findData(data);
    } catch (error) {
        console.log(error);
    }

}


readData = (data) => {



    let table = document.querySelector("table");
    let tableBody = document.createElement("tbody");

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

   inputBuscar= document.getElementById("inputBuscar").value;

    console.log(inputBuscar);

    data.find((item) => {
        if (item.username == "fmartinez") {
            console.log(item);
        }
    });


}



