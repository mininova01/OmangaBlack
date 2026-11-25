const menuButton = document.querySelector('.menu');
const navigationLinks = document.querySelector('.navlinks');

if (menuButton && navigationLinks) {
    menuButton.addEventListener('click', () => {
        const isOpen = navigationLinks.style.display === 'flex';

        navigationLinks.style.display = isOpen ? 'none' : 'flex';
        navigationLinks.style.position = 'absolute';
        navigationLinks.style.top = '76px';
        navigationLinks.style.right = '6vw';
        navigationLinks.style.flexDirection = 'column';
        navigationLinks.style.padding = '20px';
        navigationLinks.style.background = 'var(--surface)';
        navigationLinks.style.border = '1px solid var(--line)';
    });
}
