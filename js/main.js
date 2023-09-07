//pesquisarCep recebe uma arrow Function
const pesquisarCep = () => {
    alert("oiie!");
    const cep = document.getElementById('cep').value;
}


document.getElementById('cep').addEventListener('focusout', pesquisarCep);
//addEventListener "escuta" todos os eventos do controle que definimos pelo id.
//focusout quando o controle perde o foco.