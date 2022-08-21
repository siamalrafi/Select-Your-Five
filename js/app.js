let playerArry = [];
function setValue(playerArry) {
    const setPlayer = document.getElementById('player-list');
    setPlayer.innerHTML = '';
    for (let i = 0; i < playerArry.length; i++) {
        const playerName = playerArry[i].player;
        console.log(playerName);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${playerName}</td> `;
        setPlayer.appendChild(tr);
    }
}

function clickBtn(element) {
    let player = (element.parentNode.parentNode.children[0].innerText);
    const playerObj = {
        player: player,
    }
    playerArry.push(playerObj);
    let selectedPlayer = playerArry.length;
    if (selectedPlayer >= 6) {
        alert('You already select five player')
    }
    setValue(playerArry)
}