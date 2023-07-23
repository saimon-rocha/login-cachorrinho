// Ao carregar a página html ele já carrega a fotinho do animalzinho
// Com os olhos abertos
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("image").src = "./_image/aberto.jpg"
});

// Essa função só é chamada quando clicar no olho do formulario para mostrar a senha
async function mostrarSenha() {
    const togglePassword = document.querySelector('#toggle-password');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.textContent = type === 'password' ? '🙈' : '👁️';
        (type === 'text' ? espia() : esconde())
    });
}

function mostra() {
    document.getElementById("image").src = "./_image/aberto.jpg"
}

// Essa função esconde os olhos
// Usado para quando for digitar a senha
function esconde() {
    // Aqui eu valido o tipo do campo senha
    const type = password.getAttribute('type');
    // Se ele for do tipo texto é pq foi clicado na função mostrarSenha
    // Então ele deve ficar o tempo todo com um olho tapado
    // Se o tipo for password é pq não foi clicado para mostrar a senha então
    // Deve ficar com os olhos fechados
    (type === 'text' ? espia() : document.getElementById("image").src = "./_image/cobrindo.jpg")
}

// Função que mostra somente um olho aberto e o outro tapadinho
function espia() {
    document.getElementById("image").src = "./_image/espia.jpg"
}

