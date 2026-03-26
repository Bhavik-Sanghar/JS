
function table_maker(){

let div = document.getElementById("table_area");
div.innerHTML = ``;
const rows = document.getElementById("rows").value;
const cols = document.getElementById("cols").value;

const table = document.createElement("table");

for(let i = 0 ; i < rows ; i++){
    const row = table.insertRow();
    for(let j = 0 ; j < cols ; j++){
        const cell = row.insertCell();
        cell.innerText = `${i} , ${j} Cell`
    }
}

div.appendChild(table);
}

function del_row(){
    const row_del = document.getElementById("row_del").value;
    const table = document.getElementsByTagName("table")[0];

    table.deleteRow(row_del);
}

function del_col(){
    const col_del = document.getElementById("col_del").value;
    const table = document.getElementsByTagName("table")[0];

    rows = table.rows;
    
    for(let i = 0 ; i < rows.length ; i++){
        rows[i].deleteCell(col_del);
    }

}

function row_add(){
    const row_add = document.getElementById("row_add").value;
    const table = document.getElementsByTagName("table")[0];

    for(let i = 0 ; i < row_add ; i++){
        let row = table.insertRow();
        let rowIndex = table.rows.length - 1;
        for(let j = 0 ; j < table.rows[0].cells.length; j ++){
            let cell = row.insertCell();
            cell.innerHTML = `${rowIndex} , ${j} Cell`
        }
    }

}

function col_add(){
    const col_add = document.getElementById("col_add").value;
    const table = document.getElementsByTagName("table")[0];

    let rows = table.rows.length;

    for(let i = 0; i < col_add ; i++ ){
        const col_legth = table.rows[0].cells.length;
        for(let j = 0 ; j < table.rows.length ; j ++){
            let cell = table.rows[j].insertCell();
            cell.innerHTML = `${j} ${col_legth} Cell`
        }
    }
}