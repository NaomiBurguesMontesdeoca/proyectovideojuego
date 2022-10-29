const game = {
    title: '',
    author: 'Raquel Tejada y Naomi Burgués',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    background: undefined,

    player: undefined,

    obstacles: [],
    monster: [],
    lab: [],
    lifes: [],
    timeCounter: 0,

    canvasSize: {
        w: undefined,
        h: undefined
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.createMonster()
        this.createLab()
        this.createLifes()
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

    start() {
        this.reset()

        this.interval = setInterval(() => {

            this.timeCounter++

            if (this.timeCounter % 300 === 0) {
                this.createMonster()
            }
            if (this.timeCounter % 400 === 0) {
                this.createLab()
            }
            if (this.timeCounter % 600 === 0) {
                this.createLifes()
            }

            this.clearAll()
            this.drawAll()
            this.moveAll()

        }, 50)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize)
        // this.obstacles = new Obstacle(this.ctx, this.canvasSize)
        // this.monster = new Monster(this.ctx, this.canvasSize)
        //añadir bonus
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.monster.forEach(elm => elm.clear())
        this.monster = this.monster.filter(elm => elm.monsterPos.y <= this.canvasSize.h)
        this.lab.forEach(elm => elm.clear())
        this.lab = this.lab.filter(elm => elm.labPos.y <= this.canvasSize.h)
        this.lifes.forEach(elm => elm.clear())
        this.lifes = this.lifes.filter(elm => elm.lifesPos.y <= this.canvasSize.h)

        // añadir todo lo que queramos borrar (obstacle, monster, lab, life)
    },

    moveAll() {
        this.player.setEventHandlers()
        // this.obstacle.forEach(elm => elm.move())
        this.monster.forEach(elm => elm.move())
        this.lab.forEach(elm => elm.move())
        this.lifes.forEach(elm => elm.move())

    },

    drawAll() {

        this.background.draw()
        this.player.draw()
        this.monster.forEach(elm => elm.draw())
        this.lab.forEach(elm => elm.draw())
        this.lifes.forEach(elm => elm.draw())

        // this.monster.draw()
        // this.obstacles.draw()
        // this.obstacle.forEach(elm => elm.drawText())


    },

    gameOver() {
        clearInterval(this.interval)
    },

    createObstacle() {
        // this.obstacles.push(drawText())
    },

    createMonster() {
        this.monster.push(new Monster(this.ctx, this.canvasSize))
    },

    createLab() {
        this.lab.push(new Lab(this.ctx, this.canvasSize))
    },

    createLifes() {
        this.lifes.push(new Lifes(this.ctx, this.canvasSize))
    }

}