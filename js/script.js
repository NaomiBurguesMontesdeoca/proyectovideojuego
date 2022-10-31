window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame()
    }

    function startGame() {
        game.init()
    }
}

// game.init()