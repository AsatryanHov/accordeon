const headersaccordeon = document.querySelectorAll("[data-name='accordeon-title']");

headersaccordeon.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
}
