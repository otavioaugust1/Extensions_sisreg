// --------- DECLARAÇÃO DE CONSTANCIAS BARRAS ---------//

const interval = setInterval(()=>{
    const barraMenu = document.querySelector("#barraMenu");
    const barraSup = document.querySelector("#barraSistemaSup");
    
//--------------- BARRA SUPERIOR----------------------//

    if (barraMenu){
        clearInterval(interval);
        barraSup.innerHTML = "CANCELAMENTO AUTOMÁTICO DE SOLICITAÇÕES EM FILA";
        barraSup.style.color = "#F5F5F5";
        barraSup.style.background = "#64DD17"
        barraSup.style.fontSize = "1.6rem";
        barraSup.style.border = "none";

// --------- DECLARAÇÃO DE MENU ----------------------//        

        const menuCancelamento = document.createElement("a");
        menuCancelamento.innerHTML = "CANCELAR AUTOMATICAMENTE ";
        menuCancelamento.style.color = "#F5F5F5";
        menuCancelamento.classList.add("cancelandoDevolvidosNx");

        const barraProgresso = document.createElement("progress"); 
        barraProgresso.classList.add("barraProgressoNx");

        barraMenu.appendChild(menuCancelamento);
        barraMenu.appendChild(barraProgresso);

// --------- DECLARAÇÃO DO CANCELAMENTO --------------// 

        menuCancelamento.addEventListener("click", () => {
            let qtdeCancelamentos = prompt("Tenho "+listaCodSol.length+" solicitações para cancelar. Quantas devo cancelar? Informe a quantidade.");
            if (qtdeCancelamentos > listaCodSol.length || qtdeCancelamentos <= 0){
                alert("Quantidade digitada não pode ser maior que o total apresentado a você. E nem zero ou menor que zero.");
            }
            else {
                let numFinal =  qtdeCancelamentos;
                if (window.confirm("Tem certeza que devo cancelar "+ numFinal+" solicitações?")){
                    let index = 0;
                    barraProgresso.max = numFinal;
                    const tempoRestante = setInterval(()=>{

// -- DECLARAÇÃO MENSAGEM COLOCADA NO CANCELAMENTO ---// 
                        
                        let url = "";

// -- DECLARAÇÃO DA QUANT DE SOLICITACAO CANCELADA ---// 

                        let siteSisreg = new XMLHttpRequest();
                        siteSisreg.open("GET", url, false);
                        siteSisreg.send();

                        index=index+1;
                        barraProgresso.value=index;
                        barraSup.style.color = "#F5F5F5";
                        barraSup.style.fontSize = "1.6rem";
                        barraSup.innerHTML = "Ultimo código cancelado: "+ (listaCodSol[index-1]) +" /  "+index+" de  "+numFinal;

// ---------- MENSAGEM DE FINALIZAÇÃO ----------------//

                        if (index == numFinal) {
                            barraSup.innerHTML = "Ultimo código cancelado: "+ (listaCodSol[index-1]) +" /  "+index+" de  "+numFinal+"TERMINADO!!!";
                            clearInterval(tempoRestante);
                        }                                                
                    }, 3000); 
                }else{
                    alert ("Comando Cancelado.");                    
                    }
            }
        }
        )
    }
},2000);

let listaCodSol = []