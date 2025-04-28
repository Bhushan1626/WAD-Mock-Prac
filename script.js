document.querySelectorAll('.menu li').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent}`);
    });
});
