// --------- DECLARAÇÃO MENSAGEM ---------//


function clBtSalvarMsg(){
    let mensJustifica = getElementById('mensagemCancelamento')
    mensagemCancelamento.innerHTML = mensJustifica

function clkBtPlay(){
    
    let url = `https://sisregiiihomologacao.saude.gov.br/cgi-bin/gerenciador_solicitacao?etapa=CANCELAR_SOLICITACAO&co_seq_solicitacao=${listCodSol[index]}&st_situacao=C&ds_observacao=${mensJustifica}`

    let siteSisreg = new XMLHttpRequest();
    siteSisreg.open("GET", url, false);
    siteSisreg.send();
    index=index+1;




}
}


