let playerArry = [];
function setValue(playerArry) {
    const setPlayer = document.getElementById('player-list');
    setPlayer.innerHTML = '';
    for (let i = 0; i < playerArry.length; i++) {
        const playerName = playerArry[i].player;
        console.log(playerName);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th ">${i + 1}</th>
        <td ">${playerName}</td> `;
        setPlayer.appendChild(tr);
    }
}


function clickBtn(element) {
    element.disabled = true;
    let player = (element.parentNode.parentNode.children[0].innerText);
    const playerObj = {
        player: player,
    }
    playerArry.push(playerObj);
    let selectedPlayer = playerArry.length;














    if (selectedPlayer === 5) {
        alert('You done')
    }
    else if (selectedPlayer >= 6) {
        alert('Vaia This is extra')
    }
    setValue(playerArry);
    return disabled;
}

// Hisab section
function inputValue(inputId) {
    let inputString = document.getElementById(inputId).value;

    let Amount = parseInt(inputString);

    return Amount;

}

document.getElementById('calculate').addEventListener('click', function () {

    const playerAmount = inputValue('per-player');

    document.getElementById('expenses').innerText = playerAmount * 5;

    if (document.getElementById('per-player').value == '') {
        alert('please enter you Amount')
    }
})

document.getElementById('total-calculate').addEventListener('click', function () {
    if (document.getElementById('coach').value == '' || document.getElementById('manager').value == '') {
        alert('please enter you Amount')
    }
    else {
        const perPlayerAtring = document.getElementById('expenses').innerText;

        const perPlayerAmount = parseFloat(perPlayerAtring)
        const managerAmount = inputValue('manager');
        const coachAmount = inputValue('coach');

        const totalAmount = managerAmount + coachAmount + perPlayerAmount;

        document.getElementById('total-Amount').innerText = totalAmount;
    }


})