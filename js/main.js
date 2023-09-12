//pesquisarCep recebe uma arrow Function
const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value;
    //utilizando o template string para concatenar string
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    // Modo para realizar a consulta utilizando o fetch
    // fetch(url)
    // .then(responde => responde.json())
    // .then((dados) => console.log(dados));
    if (cepValido(cep)) {

        const dados = await fetch(url);
        const endereco = await dados.json();
        // if(endereco.hasOwnPreperty());
        preencherFormulario(endereco);
    } else {
        document.getElementById('logradouro').value = 'CEP não encontrado!';
    }
    // console.log(endereco);
    
}

const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

//varifica a quantidade de caracteres de CEP;
//verifica se todos os caracteres são numero;
//o acento circunflexo(^) indica que o inicio da variavel numero precisa ser um numero;
//o sinal de mais (+) representa que pode ser mais de um ou mais caracteres;
// o cifrão ($) indica que é o fim da validação;
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
const eNumero = (numero) => /^[0-9]+$/.test(numero);

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
//addEventListener "escuta" todos os eventos do controle que definimos pelo id.
//focusout quando o controle perde o foco.