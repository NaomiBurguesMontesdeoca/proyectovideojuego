class WrongObstacle {
    constructor(ctx, canvasSize, counter, rightX = 0, rightW = 0) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.imageName = ['01_lenght', '02_heitgh', '03_widht', '04_ArrayWrong', '05_ObjectWrong', '06_Conts', '07_CommentsWrong', '08_VariableIniWrong', '09_ConsoleWrong']
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
        this.counter = counter

        this.imageWrong = new Image()
        this.imageWrong.src = `./images/imagesWrong/${this.imageName[this.counter]}.png`

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