function csv_To_Array(str, delimiter = ",") {
    const header_cols = str.slice(0, str.indexOf("\n")).split(delimiter);
    const row_data = str.slice(str.indexOf("\n") + 1).split("\n");
    const arr = row_data.map(function (row) {
      const values = row.split(delimiter);
      const el = header_cols.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });

    // return the array
    return arr;
  }

//        const MENU_DEVOLVER_PENDENTE = document.createElement("b");
//        MENU_DEVOLVER_PENDENTE.innerHTML = " DEVOLVER SOLICITACAO   ";
//        MENU_DEVOLVER_PENDENTE.style.color = "#F5F5F5";
//        MENU_DEVOLVER_PENDENTE.style.height = "auto";
//        MENU_DEVOLVER_PENDENTE.classList.add("cancelandoDevolvidosNx");

//        BARRA_MENU.appendChild(MENU_DEVOLVER_PENDENTE);


 /* Devido ao tempo decorrido sem reenvio/reavaliação/resposta a orientação registrada pelo profissional Regulador, a Gerência de Regulação Ambulatorial realiza o cancelamento administrativo. Orientamos que caso o paciente ainda necessite e procure a Unidade de Saúde em busca de atendimento, uma nova solicitação deverá ser inserida seguindo a orientação do Regulador e protocolo de acesso vigente.*/
                        


 colocar regra para o cancelamento
 colocar historico... 
 colocar botão zerar...
 colacar botão cancelar/parar

 colocar possibilidade de editar texto de cancelamento...

 ver
