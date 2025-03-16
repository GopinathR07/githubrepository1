let inputcont = document.querySelector(".inp_load");
let resultcont = document.querySelector(".showresult");
let result;
function calculateval(event){

    let loadoutput = Number(inputcont.value);
    if(loadoutput < 40 && loadoutput >0){
        result = `$${loadoutput+10}`;
        
       } else if(loadoutput > 40){
        result = `$${loadoutput}`;
       } else {
        result = `Invalid input`;
       }   
           resultcont.innerHTML = result;
} 

    
