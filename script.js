// Selecionando os elementos na tela
const caixaMensagem = document.querySelector('.mensagem-box');
const caixaReferencia = document.querySelector('.referencia');

// Função assíncrona para buscar os dados e sortear
async function carregarMensagem() {
    try {
        // 1. Busca o arquivo JSON (sua "caixa de salmos")
        const resposta = await fetch('versiculos.json');
        
        // 2. Converte a resposta em uma lista que o JS entende
        const versiculos = await resposta.json();

        // 3. Sorteia um número baseado no tamanho da lista
        const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
        const versiculo = versiculos[indiceAleatorio];

        // 4. Coloca na tela
        caixaMensagem.textContent = `"${versiculo.texto}"`;
        caixaReferencia.textContent = versiculo.ref;

    } catch (erro) {
        // Se der erro (ex: internet cair), mostra uma mensagem padrão
        console.error("Erro ao carregar versículos:", erro);
        caixaMensagem.textContent = '"O Senhor é o meu pastor, nada me faltará."';
        caixaReferencia.textContent = "Salmos 23:1";
    }
}

// Carrega assim que abre a página
carregarMensagem();

// Se tocar na tela, carrega outra (opcional)
document.body.addEventListener('click', carregarMensagem);