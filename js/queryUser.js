const api = "prueba.json";

const btnBuscar = document.getElementById("btnBuscar");
let inputBuscar = document.getElementById("inputBuscar");
let table = document.querySelector("table");
let tableBody = document.createElement("tbody");
let arr = [];
let btnClick = false;
let findOn = false;


document.addEventListener("DOMContentLoaded", () => {

    fetchData()


});

btnBuscar.addEventListener("click", () => {
    btnClick = true;

    fetchData()
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


    const DATA = data.filter((item) => item.username === inputBuscar.value)

    addData(DATA);


}

addData = (arr) => {


    tableBody.innerHTML = "";




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


        tableBody.appendChild(fila);

        findOn = true;


    });



    table.appendChild(tableBody);



}





