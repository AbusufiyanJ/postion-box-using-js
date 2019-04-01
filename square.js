const tableParams = {
    rows:5,
    cols:5
}

const currentPosition = {
    row:0,
    col:0
}

// create table dynamically
function createTable() {
    let { rows,cols } = tableParams;
    
    let container = document.getElementById('container');
    let tbl = document.createElement("table");
    tbl.setAttribute("id", "table");
  
    for (let r = 0; r < rows; r++) {
        let row = document.createElement("tr");

         for (let c = 0; c < cols; c++) {
            let cell = document.createElement("td");
            // set intial position of character
            let cellParams = {
                row:r,
                col:c

            };

            if (JSON.stringify(cellParams) === JSON.stringify(currentPosition)) {
                cell.innerText = 'Q';
            }
            row.appendChild(cell);
        }           
        tbl.appendChild(row); // add the row to the end of the table body
    }
    container.appendChild(tbl); // appends <table> into <container>
}

function moveCellValue(currentPosition,prevPosition){
    document.getElementById("table").rows[prevPosition.row].cells[prevPosition.col].innerText = ''; // remove text from prev position
    document.getElementById("table").rows[currentPosition.row].cells[currentPosition.col].innerText = 'Q';  // add text to the next position
}

function alertMsg(){
   alert('I have reached the end please move me on other directions');
}

function moveRight(){
    let prevPosition = Object.assign({}, currentPosition); // copy an object in to a variable
    if(currentPosition.col < tableParams.cols - 1){
        currentPosition.col ++;
        moveCellValue(currentPosition,prevPosition);
    }else{
        alertMsg();
    }
}

function moveLeft(){
    let prevPosition = Object.assign({}, currentPosition);
    if(currentPosition.col > 0){
        currentPosition.col --;
        moveCellValue(currentPosition,prevPosition);
    }else{
        alertMsg();
    }
}

function moveTop(){
    let prevPosition = Object.assign({}, currentPosition);
    if(currentPosition.row > 0){
        currentPosition.row --;
        moveCellValue(currentPosition,prevPosition);
    }else{
        alertMsg();
    }
}

function moveBottom(){
    let prevPosition = Object.assign({}, currentPosition);
    if(currentPosition.row < tableParams.rows - 1){
        currentPosition.row ++;
        moveCellValue(currentPosition,prevPosition);
    }else{
        alertMsg();
    }
}

// event listeners for directions
document.getElementById("right").addEventListener("click", moveRight);
document.getElementById("left").addEventListener("click", moveLeft);
document.getElementById("bottom").addEventListener("click", moveBottom);
document.getElementById("top").addEventListener("click", moveTop);

window.onload=createTable; 
