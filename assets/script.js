


// Função para resetar a animação da nuvem
function resetAnimation() {
    const cloud = document.querySelector('.cloud');
    cloud.style.animation = 'none';                             // Reseta a animação para evitar problemas de reinício imediato
    cloud.offsetHeight;                                         // Força uma reflow (rearranjo) para que a nova animação funcione corretamente
    cloud.style.animation = 'rotationLeft 60s linear infinite'; // Reaplica a animação
    console.log('A animação foi resetada!');                    // Mostra uma mensagem no console toda vez que a animação é reiniciada
}

// Chamar a função de reset uma vez ao carregar o DOM
document.addEventListener('DOMContentLoaded', function () {
    resetAnimation();

    // Chamar a função de reset a cada 50 segundos
    setInterval(resetAnimation, 30000);

    

    
});


let openButton = document.querySelector('.buttonNav');
openButton.addEventListener("click", openMenu);

function openMenu() {
    let menuOpen = document.querySelector('.menuOpen');
    if (menuOpen.style.width === "0px") {
        menuOpen.style.width = "130px";
    } else {
        menuOpen.style.width = "0px";
    }
};



// função adicionar e remove class check botoes de navegação
/*
document.addEventListener("DOMContentLoaded", function () {
    let bt1 = document.querySelector('.bt1');
    bt1.addEventListener("click", clickBt1);
    
    function clickBt1(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique
        bt1.classList.add('check');
        bt2.classList.remove('check');
        bt3.classList.remove('check');
        
        console.log('clicou no botao inicio');
    }

    let bt2 = document.querySelector('.bt2');
    bt2.addEventListener("click", clickBt2);
    
    function clickBt2(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique
        bt1.classList.remove('check');
        bt2.classList.add('check');
        bt3.classList.remove('check');

        console.log('clicou no botao produtos');
    }

    let bt3 = document.querySelector('.bt3');
    bt3.addEventListener("click", clickBt3);
    
    function clickBt3(event) {
        event.preventDefault(); // Evita o comportamento padrão do clique
        bt1.classList.remove('check');
        bt2.classList.remove('check');
        bt3.classList.add('check');

        console.log('clicou no botao produtos');
    }
});*/
