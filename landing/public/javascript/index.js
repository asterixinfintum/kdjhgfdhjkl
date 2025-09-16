const registerBtns = document.querySelectorAll('.registerbtn');

registerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://trade.bsn.finance/register', '_blank');
    });
});