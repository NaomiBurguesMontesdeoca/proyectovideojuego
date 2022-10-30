const game = {
    title: '',
    author: 'Raquel Tejada y Naomi Burgués',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    background: undefined,

    player: undefined,
    lifesScore: undefined,
    text: 0,

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
        this.drawText(this.text)
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
            this.isCollisionMonster()
            this.isCollisionLab()
            this.isCollisionLifes()

        }, 50) // como hacer que cada uno empiece en un tiempo diferente?
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize)
        this.lifesScore = new LifesScore(this.ctx, this.canvasSize)
        // this.obstacles = new Obstacle(this.ctx, this.canvasSize)

    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.monster.forEach(elm => elm.clear())
        this.monster = this.monster.filter(elm => elm.monsterPos.y <= this.canvasSize.h)
        this.lab.forEach(elm => elm.clear())
        this.lab = this.lab.filter(elm => elm.labPos.y <= this.canvasSize.h)
        this.lifes.forEach(elm => elm.clear())
        this.lifes = this.lifes.filter(elm => elm.lifesPos.y <= this.canvasSize.h)
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
        this.lifesScore.draw()
        this.monster.forEach(elm => elm.draw())
        this.lab.forEach(elm => elm.draw())
        this.lifes.forEach(elm => elm.draw())
        // this.obstacles.draw()
        // this.obstacle.forEach(elm => elm.drawText()
    },

    drawText(text) {
        this.ctx.font = '30px arial'
        this.ctx.fillStyle = '#D21404'
        this.ctx.fillText(text, this.lifesScorePos.x - this.lifesScoreSize.w, this.lifesScorePos.y + this.lifesScoreSize.h - 5)
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
    },

    // createLifesScore() {
    //     this.lifesScore = new LifesScore(this.ctx, this.canvasSize)
    // },

    isCollisionMonster() {
        this.monster.forEach((m) => {
            if (
                this.player.playerPos.x < m.monsterPos.x + m.monsterSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > m.monsterPos.x &&
                this.player.playerPos.y < m.monsterPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > m.monsterPos.y
            ) {
                this.player.playerVel += 50
                m.monsterPos.y = 5000

                setInterval(() => {
                    this.player.playerVel = 20
                }, 5000)
            }
        })
    },

    isCollisionLab() {
        this.lab.forEach((lab) => {
            if (
                this.player.playerPos.x < lab.labPos.x + lab.labSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > lab.labPos.x &&
                this.player.playerPos.y < lab.labPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > lab.labPos.y
            ) {
                this.player.playerVel -= 15
                lab.labPos.y = 5000

                setInterval(() => {
                    this.player.playerVel = 20
                }, 10000)
            }
        })
    },

    isCollisionLifes() {
        this.lifes.forEach((lifes) => {
            if (
                this.player.playerPos.x < lifes.lifesPos.x + lifes.lifesSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > lifes.lifesPos.x &&
                this.player.playerPos.y < lifes.lifesPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > lifes.lifesPos.y
            ) {
                this.lifesScore++ // ¿porque desaparece?
                lifes.lifesPos.y = 5000
            }
        })
    },

    gameOver() {
        clearInterval(this.interval)
    },

}