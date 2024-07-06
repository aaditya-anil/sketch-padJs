
let containerDiv = document.getElementById('container')
    

for (let index = 0; index < 16; index++) {


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
        }, 1000);
        
    });
}

