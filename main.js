
let containerDiv = document.getElementById('container')

function promptSquareNumber() {
    let squareNumber = prompt("Enter the number of squares (max 10)");
    if (squareNumber<=10) {
        createGrid(squareNumber);
    }
    else{
        promptSquareNumber();
    }
    
}
    
//creates a noOfSqaures x noOfSquares Block
function createGrid(noOfSquares=4) { 
    let TotalSqaures = noOfSquares * noOfSquares;
    containerDiv.innerHTML = "";

    for (let index = 0; index < TotalSqaures; index++) {       
        let newDiv = document.createElement("div")
        newDiv.style.border = '2px solid black'
        newDiv.className = "my-class" 
        newDiv.style.width = '100px'  
        newDiv.style.height = '100px'          
        
        containerDiv.appendChild(newDiv) 
    
        newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'lightcoral';
        });
    
        newDiv.addEventListener('mouseout', () => {
            setTimeout(() => {
                newDiv.style.backgroundColor = 'white';
            }, 3000);
            
        });
    }
    containerDiv.style.gridTemplateColumns = `repeat(${noOfSquares}, 100px)`;
}



document.addEventListener("DOMContentLoaded",function () {
    createGrid();
})