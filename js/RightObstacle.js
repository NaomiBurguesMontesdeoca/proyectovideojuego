class RightObstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageName = ['01_length', '02_heigth', '03_width',]
        this.obstacleSize = {
            w: 200, h: 75
        }
        this.obstaclePos = {
            x: Math.random() * canvasSize.w - this.obstacleSize.w,
            y: 0
        }
        this.obstacleSpeed = 3

        this.imageRight01 = new Image()
        this.imageRight01.src = `../images/imagesRight/${imageName[0]}.png`
    }

    drawRight01() {
        this.ctx.drawImage(
            this.imageRight01,
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