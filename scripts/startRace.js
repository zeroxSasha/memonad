const buttonStartRace = document.querySelector('.main__button'); 

buttonStartRace.addEventListener('click', startRace);

async function startRace() {
    const car1 = document.getElementById('fastcar');
    const car2 = document.getElementById('slowcar');
    const winnerMsg = document.getElementById('winner-msg');
    if (car1 === null || car2 === null) {
        return;
    }
    if (winnerMsg.style.display === 'block')
    {
        winnerMsg.style.display = 'none';
    }

    car1.classList.add('fastcar-move');
    car2.classList.add('slowcar-move');
    await sleep(10500);
    winnerMsg.style.display = 'block';
    car1.classList.remove('fastcar-move');
    car2.classList.remove('slowcar-move');
}
