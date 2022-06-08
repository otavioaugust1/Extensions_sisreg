// --------- DECLARAÇÃO DE CONSTANCIAS BARRAS ---------//

const interval = setInterval(()=>{
    const barraMenu = document.querySelector("#barraMenu");
    const barraSup = document.querySelector("barraSistemaSup");
    
//--------------- BARRA SUPERIOR----------------------//

    if (barraMenu){
        clearInterval(interval);
        barraSup.innerHTML = "Cancelando solicitações em fila.";
        barraSup.style.color = "#F5F5F5";
        barraSup.style.background = "#64DD17"
        barraSup.style.fontSize = "1rem";
        barraSup.style.border = "none";

// --------- DECLARAÇÃO DE MENU ----------------------//        

        const menuCancelamento = document.createElement();
        menuCancelamento.innerHTML = "Cancelando Solicitações"
        
    }
}    
)