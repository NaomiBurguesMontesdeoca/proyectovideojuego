class RightObstacle {
    constructor(ctx, canvasSize, counterRight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageName = ['01_length', '02_heigth', '03_width', '04_Array[]', '05_Object{}']
        this.obstacleSize = {
            w: 200, h: 75
        }
        this.obstaclePos = {
            x: Math.random() * canvasSize.w - this.obstacleSize.w,
            y: 0
        }
        this.obstacleSpeed = 3
        this.counterRight = counterRight

        this.imageRight = new Image()
        this.imageRight.src = `../images/imagesRight/${this.imageName[this.counterRight]}.png`
    }



    draw() {
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