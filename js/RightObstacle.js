class RightObstacle {
    constructor(ctx, canvasSize, counter) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageName = ['01_length', '02_height', '03_width', '04_ArrayRight', '05_ObjectRight', '06_Const', '07_CommentsRight', '08_VariableIniRight', '09_ConsoleRight']
        this.obstacleSize = {
            w: 200, h: 75
        }
        this.obstaclePos = {
            x: Math.random() * (canvasSize.w - this.obstacleSize.w),
            y: 0
        }
        this.obstacleSpeed = 3
        this.counter = counter
        console.log(this.counter)

        this.imageRight = new Image()
        this.imageRight.src = `./images/imagesRight/${this.imageName[this.counter]}.png`
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
}