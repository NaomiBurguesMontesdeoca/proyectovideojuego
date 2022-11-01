class WrongObstacle {
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

        this.imageWrong01 = new Image()
        this.imageWrong01.src = '../images/imagesWrong/01_lenght.png'

    }

    drawWrong01() {
        this.ctx.drawImage(
            this.imageWrong01,
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