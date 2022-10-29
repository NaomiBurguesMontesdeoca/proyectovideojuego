class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSize = {
            w: undefined, h: undefined
        }
        this.obstaclePos = {
            x: undefined, y: undefined
        }
        this.obstacleSpeed = 1

        this.init() // preguntar el sentido de esto
    }

    init() { // preguntar el sentido de esto
        this.setDimensions()
    }

    setDimensions() {
        const correctWord = '.length'
        this.obstacleSize = {
            w: correctWord.length,
            h: 10
        }

        const incorrectWord = '.lenght'
        this.obstacleSize = {
            w: incorrectWord.length,
            h: 10
        }
    }

    drawText() {
        this.ctx.font = '50px arial'
        this.ctx.fillText(correctWord, 100, 100) // comprobar posiciones después y cambiar. 
    }

    move() {

        if (this.obstaclePos.x >= this.obstacleSize.w - this.obstacleSize.w) {
            this.obstacleSpeed *= -1
        }

        if (this.obstaclePos.x < 0) {
            this.obstacleSpeed *= -1
        }

        this.obstaclePos.x += this.obstacleSpeed
    }


}