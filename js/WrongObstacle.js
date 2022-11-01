class WrongObstacle {
    constructor(ctx, canvasSize, counter, rightX = 0, rightW = 0) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.obstacleSize = {
            w: 200, h: 75
        }

        const rightPoint = rightX + rightW
        const leftPoint = rightX - rightW
        let pos = Math.random() * (canvasSize.w - this.obstacleSize.w)
        while (pos < rightPoint && pos > leftPoint) {
            pos = Math.random() * (canvasSize.w - this.obstacleSize.w)
        }

        this.obstaclePos = {
            x: pos,
            y: 0
        }
        this.obstacleSpeed = 3

        this.imageWrong = new Image()
        this.imageWrong.src = '../images/imagesWrong/01_lenght.png'

    }

    draw() {
        this.ctx.drawImage(
            this.imageWrong,
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