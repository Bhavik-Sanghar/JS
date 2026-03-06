// let x = 10;

// console.log(x);


// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);
// console.log(text.at(5));
// console.log(text.slice(-5));
// console.log(text.substring(1,3));
// console.log(text.padStart(30,"0"));
// console.log(text.repeat(2));
// console.log(text.split(""));
// console.log(text.search("B"));
// console.log(text.match("B"));
// console.log(text.includes('B'));

// const my_table = document.createElement("table")
// const my_row = document.createElement("tr")
// const my_col = document.createElement("td")
// elem.appendChild(my_table);
// my_table.appendChild(my_row);
// my_row.appendChild(my_col);

// my_col.innerText = "Hiii"



function table_maker(){

    row_val = document.getElementById("rows").value;
    col_val = document.getElementById("cols").value;
    const elem = document.getElementById("table_area");
    elem.innerHTML=""
    const my_table = document.createElement("table");
    for(i= 0 ; i < row_val ; i++){
        const my_row = document.createElement("tr");
        for (j=0; j<col_val;j++){
            const my_col = document.createElement("td");
            my_col.innerText = `Cell ${i+1},${j+1}`;
            my_row.appendChild(my_col);
            // my_col.style.border = "2px solid green"
            // my_col.style.textAlign = "center"
        }
        my_row.style.borderCollapse = "collaps";
        my_table.appendChild(my_row);
    }
    elem.appendChild(my_table);
    
    // my_table.style.width = "50%"
    // my_table.style.border = "10px solid RED"
    // my_table.style.borderCollapse = "collaps"
}

function del_row(){
    // const row_del = document.getElementsByTagName("table")[0].lastChild;
    // row_del.remove() 
    row_num = document.getElementById("row_del").value;
    const my_table = document.getElementsByTagName("table")[0];
    my_table.deleteRow(row_num-1)  
}

function del_col(){
    
    const col_num = document.getElementById("col_del").value;
    const my_table = document.getElementsByTagName("table")[0];
    const rows = my_table.rows;
    for(i = 0 ; i < rows.length ; i++){
        rows[i].deleteCell(col_num-1);
    }    
}



function row_add() {
    const row_count = document.getElementById("row_add").value;
    const my_table = document.getElementsByTagName("table")[0];
    const col_count = my_table.rows[0].cells.length;
    for(j = 0 ; j < row_count;j++){
        const r = my_table.insertRow();
        for(i = 0 ; i < col_count;i++){
        const cell = r.insertCell();
        cell.innerText = `Cell ${r.rowIndex + 1},${i+1}` 
    }
    }
};

function col_add() {
    const col_need = document.getElementById("col_add").value;
    const my_table = document.getElementsByTagName("table")[0];
    const r = my_table.rows
    for(j = 0 ; j < col_need;j++){
        const col_count = my_table.rows[0].cells.length;
        for(i = 0 ; i < r.length;i++){
            const cell = r[i].insertCell();
            cell.innerText = `Cell ${i + 1},${col_count+1}` 
    }
    }
};


