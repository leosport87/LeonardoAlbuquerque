function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}


const nameElement = document.getElementById('name');
const nameText = "LEONARDO ALBUQUERQUE"; // O texto que será digitado
let index = 0; // Inicializa o índice da letra

function typeLetter() {
    if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index); // Adiciona a próxima letra ao texto
        index++;
        setTimeout(typeLetter, 300); // Define o intervalo entre as letras (ajuste conforme desejado)
    }
}

// Inicie a animação quando a página carregar
window.addEventListener('load', () => {
    typeLetter();
});

// JavaScript para controlar a rotação da imagem

function rotateImage() {
    var image = document.getElementById("rotating-image");
    image.classList.add("rotate");
    setTimeout(function() {
        image.classList.remove("rotate");
    }, 1000); // Remova a classe de rotação após 1 segundo
}


// Remova 

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll("[data-tab='menu'] li");
    const tabContents = document.querySelectorAll("[data-tab='content'] section");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remove a classe "active" de todas as guias
            tabs.forEach((t) => t.classList.remove("active"));

            // Adiciona a classe "active" apenas para a guia clicada
            tab.classList.add("active");

            // Oculta todos os conteúdos de experiência
            tabContents.forEach((content) => content.classList.remove("active"));

            // Exibe o conteúdo de experiência correspondente à guia clicada
            tabContents[index].classList.add("active");
        });
    });
});






