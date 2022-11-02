const game = {
    title: 'TIKI TIKI',
    author: 'Raquel Tejada y Naomi Burgués',
    license: undefined,
    version: '1.0.0',
    ctx: undefined,
    background: undefined,
    gameOverBackground: undefined,

    player: undefined,
    lifesScore: undefined,
    textLifes: 1,
    textScore: 0,

    obstacles: [],
    obstacleRight: [],
    obstacleWrong: [],
    counter: 0,


    monster: [],
    lab: [],
    lifes: [],
    timeCounter: 0,
    timeCounterMonster: 0,
    timeCounterLab: 0,
    currentBonus: '',

    canvasSize: {
        w: undefined,
        h: undefined
    },

    init() {
        this.setContext()
        this.setDimensions()
        this.createLifesScore()
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

            if (this.timeCounter % 50 === 0) {
                this.createObstacles()
            }

            this.clearAll()
            this.drawAll()
            this.gameOver()
            this.moveAll()
            this.isColisionMonster()
            this.isColisionLab()
            this.isColisionLifes()
            this.isColisionObstacleRight()
            this.isColisionObstacleWrong()
            this.isCurrentBonus()
        }, 50)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize)
        this.player = new Player(this.ctx, this.canvasSize)
        this.lifesScore = new LifesScore(this.ctx, this.canvasSize)
        this.gameOverBackground = new GameOverBackground(this.ctx, this.canvasSize)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.monster.forEach(elm => elm.clear())
        this.monster = this.monster.filter(elm => elm.monsterPos.y <= this.canvasSize.h)
        this.lab.forEach(elm => elm.clear())
        this.lab = this.lab.filter(elm => elm.labPos.y <= this.canvasSize.h)
        this.lifes.forEach(elm => elm.clear())
        this.lifes = this.lifes.filter(elm => elm.lifesPos.y <= this.canvasSize.h)
        this.obstacleRight.forEach(elm => elm.clear())
        this.obstacleRight = this.obstacleRight.filter(elm => elm.obstaclePos.y <= this.canvasSize.h)
        this.obstacleWrong.forEach(elm => elm.clear())
        this.obstacleWrong = this.obstacleWrong.filter(elm => elm.obstaclePos.y <= this.canvasSize.h)
    },

    moveAll() {
        this.player.setEventHandlers()
        this.obstacles.forEach(pair => pair.forEach(word => word.move()))
        this.monster.forEach(elm => elm.move())
        this.lab.forEach(elm => elm.move())
        this.lifes.forEach(elm => elm.move())
    },

    drawAll() {

        this.background.draw()
        this.player.draw()
        this.lifesScore.draw()
        this.drawText(this.textLifes)
        this.drawTextScore()
        this.monster.forEach(elm => elm.draw())
        this.lab.forEach(elm => elm.draw())
        this.lifes.forEach(elm => elm.draw())
        this.obstacles.forEach(pair => pair.forEach(word => word.draw()))
    },

    drawText(textLifes) {
        this.ctx.font = '30px century gothic'
        this.ctx.fillStyle = '#D21404'
        this.ctx.fillText(textLifes, this.lifesScore.lifesScorePos.x - this.lifesScore.lifesScoreSize.w,
            this.lifesScore.lifesScorePos.y + this.lifesScore.lifesScoreSize.h - 5)
    },

    drawTextScore() {
        this.ctx.font = '25px century gothic'
        this.ctx.fillStyle = 'black'
        this.ctx.fillText(`SCORE: ${this.textScore}`, 30, 45)
    },
    createObstacles() {
        const rightObstacle = new RightObstacle(this.ctx, this.canvasSize, this.counter)
        const wrongObstacle = new WrongObstacle(this.ctx, this.canvasSize, this.counter, rightObstacle.obstaclePos.x, rightObstacle.obstacleSize.w)
        this.obstacleRight.push(rightObstacle)
        this.obstacleWrong.push(wrongObstacle)
        this.obstacles.push([rightObstacle, wrongObstacle])
        if (this.counter === 8) {
            this.counter = 0
        }
        else {
            this.counter += 1
        }
    },

    createObstacleRight() {
        console.log(this.counter)
        this.obstacleRight.push(new RightObstacle(this.ctx, this.canvasSize, this.counter))
    },

    createObstacleWrong() {
        this.obstacleWrong.push(new WrongObstacle(this.ctx, this.canvasSize, this.counter))
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

    createLifesScore() {
        this.lifesScore = new LifesScore(this.ctx, this.canvasSize)
    },

    isColisionMonster() {
        this.monster.forEach((m) => {
            if (
                this.player.playerPos.x < m.monsterPos.x + m.monsterSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > m.monsterPos.x &&
                this.player.playerPos.y < m.monsterPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > m.monsterPos.y
            ) {
                this.currentBonus = 'monster'
                m.monsterPos.y = 5000
            }
        })
    },

    isColisionLab() {
        this.lab.forEach((lab) => {
            if (
                this.player.playerPos.x < lab.labPos.x + lab.labSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > lab.labPos.x &&
                this.player.playerPos.y < lab.labPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > lab.labPos.y
            ) {
                this.currentBonus = 'lab'
                lab.labPos.y = 5000
            }
        })
    },

    isCurrentBonus() {
        if (this.currentBonus === 'monster') {
            this.player.playerVel = 40
            this.timeCounterMonster++
        }

        if (this.timeCounterMonster === 10000) {
            this.player.playerVel = 20
            this.timeCounterMonster = 0
            this.currentBonus = undefined
        }


        if (this.currentBonus === 'lab') {
            this.player.playerVel = 10

        }
        if (this.timeCounterLab === 15000) {
            this.player.playerVel = 20
            this.timeCounterLab = 0
            this.currentBonus = undefined
        }
    },

    isColisionLifes() {
        this.lifes.forEach((lifes) => {
            if (
                this.player.playerPos.x < lifes.lifesPos.x + lifes.lifesSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > lifes.lifesPos.x &&
                this.player.playerPos.y < lifes.lifesPos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > lifes.lifesPos.y
            ) {
                this.textLifes < 3 ? this.textLifes++ : null
                lifes.lifesPos.y = 5000
            }
        })
    },

    isColisionObstacleRight() {
        this.obstacleRight.forEach((R) => {
            if (
                this.player.playerPos.x < R.obstaclePos.x + R.obstacleSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > R.obstaclePos.x &&
                this.player.playerPos.y < R.obstaclePos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > R.obstaclePos.y
            ) {
                this.textScore += 10
                R.obstaclePos.y = 5000
            }
        })
    },

    isColisionObstacleWrong() {
        this.obstacleWrong.forEach((W) => {
            if (
                this.player.playerPos.x < W.obstaclePos.x + W.obstacleSize.w &&
                this.player.playerPos.x + this.player.playerSize.w > W.obstaclePos.x &&
                this.player.playerPos.y < W.obstaclePos.y + this.player.playerSize.h &&
                this.player.playerSize.h + this.player.playerPos.y > W.obstaclePos.y
            ) {
                this.textLifes--
                W.obstaclePos.y = 5000 //debe desaparecer a la vez que el right
            }
        })
    },

    drawGameOver() {

        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.font = "40px century gothic";
        this.ctx.fillText(`Your score is: ${this.textScore}`,
            this.canvasSize.w / 2 - 150,
            this.canvasSize.h - 200);
        this.ctx.closePath();
        this.gameOver() ? document.querySelector('#restart-button') : null

    },

    gameOver() {

        if (this.textLifes === 0) {
            clearInterval(this.interval)
            this.clearAll()
            this.gameOverBackground.draw()
            this.drawGameOver()
            console.log(document.querySelector('#restart-button'))
        }
    }
}