//pesquisarCep recebe uma arrow Function
const pesquisarCep = () => {
    const cep = document.getElementById('cep').value;
    //utilizando o template string para concatenar string
    const url = `viacep.com.br/ws/${cep}/json/`;
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
//addEventListener "escuta" todos os eventos do controle que definimos pelo id.
//focusout quando o controle perde o foco.