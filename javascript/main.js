const fechar = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.querySelector('#video');
const botaoTrailer = document.querySelector('.botao-trailer');

fechar.addEventListener('click', () => {
    modal.classList.remove('aberto');
})
botaoTrailer.addEventListener('click', (evento) => {
    evento.preventDefault()
    modal.classList.add('aberto');
})



