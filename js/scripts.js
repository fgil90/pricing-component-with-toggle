
selector = document.querySelector('.slider.round');

annualPrices = document.querySelectorAll('.annually');
monthlyPrices = document.querySelectorAll('.monthly');

selector.addEventListener('click', togglePrices);

let isAnnual = true;

function checkCurrentState() {
    if (isAnnual) {
        monthlyPrices.forEach(element => {
            element.classList.add('hidden');
        });
        annualPrices.forEach(element => {
            element.classList.remove('hidden');
        });
    }
    else {
        monthlyPrices.forEach(element => {
            element.classList.remove('hidden');
        });
        annualPrices.forEach(element => {
            element.classList.add('hidden');
        });
    }
}

checkCurrentState();

function togglePrices() {
    isAnnual = !isAnnual;
    checkCurrentState();
}