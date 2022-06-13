// --------- DECLARAÇÃO DE CONSTANCIAS BARRAS ---------//

const INTERNAL = setInterval(()=>{
    const BARRA_MENU = document.querySelector("#barraMenu");
    const BARRA_SUP = document.querySelector("#barraSistemaSup");
    
//--------------- BARRA SUPERIOR----------------------//

    if (BARRA_MENU){
        clearInterval(INTERNAL);
        BARRA_SUP.innerHTML = "CANCELAMENTO/DEVOLUÇÃO - AUTOMÁTICO DE SOLICITAÇÕES";
        BARRA_SUP.style.color = "#F5F5F5";
        BARRA_SUP.style.background = "#64DD17"
        BARRA_SUP.style.fontSize = "1.6rem";
      
        BARRA_SUP.style.border = "none";

// --------- DECLARAÇÃO DE MENU ----------------------//        

        const MENU_CANCEL_DEVOLVIDO = document.createElement("a");
        MENU_CANCEL_DEVOLVIDO.innerHTML = " CANCELAR DEVOLUÇÃO   ";
        MENU_CANCEL_DEVOLVIDO.style.color = "#F5F5F5";
        MENU_CANCEL_DEVOLVIDO.style.height = "auto";
        MENU_CANCEL_DEVOLVIDO.classList.add("cancelandoDevolvidosNx");

        const BARRA_PROGRESSO = document.createElement("progress"); 
        BARRA_PROGRESSO.classList.add("barraProgressoNx");

        BARRA_MENU.appendChild(MENU_CANCEL_DEVOLVIDO);
        BARRA_MENU.appendChild(BARRA_PROGRESSO);

// --------- DECLARAÇÃO DO CANCELAMENTO --------------// 

        MENU_CANCEL_DEVOLVIDO.addEventListener("click", () => {
            let qtdeCancelamentos = prompt("Tenho "+listaCodSol.length+" solicitações para cancelar. Quantas devo cancelar? Informe a quantidade.");
            if (qtdeCancelamentos > listaCodSol.length || qtdeCancelamentos <= 0){
                alert("Quantidade digitada não pode ser maior que o total apresentado a você. E nem zero ou menor que zero.");
            }
            else {
                let numFinal =  qtdeCancelamentos;
                if (window.confirm("Tem certeza que devo cancelar "+ numFinal+" solicitações?")){
                    let index = 0;
                    BARRA_PROGRESSO.max = numFinal;
                    const TEMPO_RESTANTE = setInterval(()=>{

// -- DECLARAÇÃO MENSAGEM COLOCADA NO CANCELAMENTO ---// 

                        let justifica = "A Central de Regulação Ambulatorial efetuou o cancelamento administrativo desta solicitação por falta de reenvio/reavaliação/resposta/informações registradas pelo profissional Regulador de sua central ao longo do tempo. Recomendamos que, caso o paciente ainda necessite de agendamento para o atendimento, procure a Unidade de Saúde em busca de atendimento, uma nova solicitação deverá ser inserida seguindo a orientação do Regulador e protocolo de acesso vigente."                                                
                  
                        let url = "https://sisregiiitreinamento.saude.gov.br/cgi-bin/gerenciador_solicitacao?etapa=CANCELAR_SOLICITACAO&co_seq_solicitacao="+listaCodSol[index]+"&st_situacao=C&ds_observacao="+justifica;                     

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
"12044147",
"12046610",
"12048295",
"12098749",
"12141942",
"12148742",
"12191190",
"12367876",
"12371497",
"12472848"
]