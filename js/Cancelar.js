// --------- DECLARAÇÃO DE CONSTANCIAS BARRAS ---------//









const INTERNAL = setInterval(()=>{
    const BARRA_MENU = document.querySelector("#barraMenu");
    const BARRA_SUP = document.querySelector("#barraSistemaSup");
    
//--------------- BARRA SUPERIOR----------------------//

    if (BARRA_MENU){
        clearInterval(INTERNAL);
        
// --------- DECLARAÇÃO DE BOTÃO ----------------------//        

        const BOTAO_CANCEL_DEVOLVIDO = document.getElementById("playCancelar")              
        BOTAO_CANCEL_DEVOLVIDO.addEventListener("click", () => {
            
            let qtdeCancelamentos = prompt("Tenho "+listaCodSol.length+" solicitações para cancelar. Quantas devo cancelar? Informe a quantidade.");
            
            if (qtdeCancelamentos > listaCodSol.length || qtdeCancelamentos <= 0){
                alert("Quantidade digitada não pode ser maior que o total apresentado a você. E nem zero ou menor que zero.")
            }
            else{
                let numFinal =  qtdeCancelamentos;
                if (window.confirm("Tem certeza que devo cancelar "+ numFinal+" solicitações?")){
                    let index = 0;
                    BARRA_PROGRESSO.max = numFinal;
                    const TEMPO_RESTANTE = setInterval(()=>{

// -- DECLARAÇÃO MENSAGEM COLOCADA NO CANCELAMENTO ---// 

                        let justifica = msg.text
                 
                        let url = "https://sisregiii.saude.gov.br/cgi-bin/gerenciador_solicitacao?etapa=CANCELAR_SOLICITACAO&co_seq_solicitacao="+listaCodSol[index]+"&st_situacao=C&ds_observacao="+justifica;                     

// -- DECLARAÇÃO DA QUANT DE SOLICITACAO CANCELADA ---// 

                        let siteSisreg = new XMLHttpRequest();
                        siteSisreg.open("GET", url, false);
                        siteSisreg.send();

                        index=index+1;
                        BARRA_PROGRESSO.value=index;
                        BARRA_SUP.style.color = "#F5F5F5";
                        BARRA_SUP.style.fontSize = "1.6rem";
                        BARRA_SUP.innerHTML = "Ultimo código cancelado: "+ (listaCodSol[index-1]) +" /  "+index+" de  "+numFinal;

// ---------- MENSAGEM DE FINALIZAÇÃO ----------------//

                        if (index == numFinal) {
                            BARRA_SUP.innerHTML = "Ultimo código cancelado: "+ (listaCodSol[index-1]) +" /  "+index+" de  "+numFinal+" TERMINADO!!!";
                            clearInterval(TEMPO_RESTANTE);
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

// --------- LISTA DE SOLICITAÇÃO PARA CANCELAR ------//

var listaCodSol = [
"5138794",
"5149831",
"5195106",
"5201728",
"5226650",
"5234223",
"5265899",
"5290378",
"5294317",
"5302806",
"5326736",
"5326822",
"5331467",
"5374516",
"5401491",
"5402762",
"5407696",
"5418569",
"12098749",
"12141942",
"12148742",
"12191190",
"12367876",
"12371497",
"12472848"
]