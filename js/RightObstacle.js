class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSize = {
            w: 200, h: 75
        }
        this.obstaclePos = {
            x: Math.random() * canvasSize.w - this.obstacleSize.w,
            y: 0
        }
        this.obstacleSpeed = 3

        this.imageWrong = new Image()
        this.imageWrong.src = '../images/W_lenght.png'
        this.imageRight = new Image()
        this.imageRight.src = '../images/R_length.png'
    }

    drawRight() {
        this.ctx.drawImage(
            this.imageWrong,
            this.obstaclePos.x,
            this.obstaclePos.y,
            this.obstacleSize.w,
            this.obstacleSize.h)

        this.ctx.drawImage(
            this.imageRight,
            this.obstaclePos.x,
            this.obstaclePos.y,
            this.obstacleSize.w,
            this.obstacleSize.h)


        this.move()
    }

    move() {
        this.obstaclePos.y += this.obstacleSpeed
    }

    clear() {

    }


}