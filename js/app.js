const game = {
    title: '',
    author: 'Raquel Tejada y Naomi Burgués',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    background: undefined,

    player: undefined,
    obstacles: [],
    monster: undefined,
    lab: undefined,
    lifes: undefined,

    canvasSize: {
        w: undefined,
        h: undefined
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.setEventHandlers()
        this.start()
    },

    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        document.querySelector('#myCanvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.canvasSize.h)
    },

    setEventHandlers() {
        document.onkeydown = event => {    // falta info del player, pos, size e img (lo queremos metido en player.js)
            switch (event.key) {
                case 'ArrowLeft':
                    this.player.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.player.pos.y += 10
                    break;
            }
        }
    },

    start() {
        this.reset()

        this.interval = setInterval(() => {
            this.clearAll()
            this.moveAll()
            this.drawAll()
        }, 50)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        // añadir player
        //añadir obstaculos
        //añadir bonus
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        // añadir todo lo que queramos borrar (obstacle, monster, lab, life)
    },

    moveAll() {

    },

    drawAll() {
        this.background.draw()

    },

    gameOver() {
        clearInterval(this.interval)
    }


}