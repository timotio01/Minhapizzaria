let modalQt = 1;

// pegar um elemento usando query
const getEl = (el) => document.querySelector(el);
//pegar todos os elementos usando query retorna um array com todos os elementos
const getEa = (el) => document.querySelectorAll(el);

//percorrer o vetor de pizzas
pizzas.map((pizza, index ) => {
    //clonando uma area do html para ser preenchido e exibido na tela
    let pizzaItem = getEl('.models .pizza--item').cloneNode(true);
    //setar atributo data key que é atriudo q podemos guardar dados
    pizzaItem.setAttribute('data-key', index);

    //preenchimento dos dados da pizza
    pizzaItem.querySelector('.pizza--item--img img').src = pizza.img;
    pizzaItem.querySelector('.pizza--item--nome').innerHTML = pizza.nome;
    pizzaItem.querySelector('.pizza--item--preco').innerHTML = `R$ ${pizza.preco.toFixed(2)}`;
    pizzaItem.querySelector('.pizza--item--desc').innerHTML = pizza.descricao;

    //adicionando evento de click na tag de link tag a
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault(); //nao atualiza a atela
        //console.log('clicou');
        //recuperando a key(index do vetor), closest acha o elemento com a classe mais proximo
        let key = e.target.closest('.pizza--item').getAttribute('data-key');
        modalQt = 1;
        //modalKey = key;
        getEl('.pizza--big img').src = pizzas[key].img;
        getEl('.pizza--info h1').innerHTML = pizzas[key].nome;
        getEl('.pizza--info--desc').innerHTML = pizzas[key].descricao;
        getEl('.pizza--info--precoatual').innerHTML = `R$ ${pizzas[key].preco.toFixed(2)}`;

        getEl('.pizza--modal--area').style.display = 'flex';
    });


    getEl('.pizzas--area').append(pizzaItem);

});

//funcao para fechar o modal alterando o display para none
function closeModal() {
    getEl('.pizza--modal--area').style.display = 'none';
}

//funcao de click para fechar o modal ao clicar no btn cancel do modal
getEl('.pizza--info--cancelbtn').addEventListener('click', (e) => {
    console.log('close modal');
    closeModal();
});

//evento de click ao clicar no btn meno do quantidade
getEl('.pizza--info--qtmenos').addEventListener('click', (e) => {
    if(modalQt > 1) {
        modalQt--;
        getEl('.pizza--info--qt').innerHTML = modalQt;
    }
    
});

getEl('.pizza--info--qtmais').addEventListener('click', (e) => {
    modalQt++;
    getEl('.pizza--info--qt').innerHTML = modalQt;
});