const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    items.forEach(i => {
        i.setAttribute('aria-expanded', 'false');
    });

    if(itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(i => {
    i.addEventListener('click', toggleAccordion);
});