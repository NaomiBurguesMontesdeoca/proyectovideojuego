class Lifes {
    constructor(ctx, canvasSize,) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.lifesSize = {
            w: 40, h: 40
        }
        this.lifesPos = {
            x: Math.random() * canvasSize.w - this.lifesSize.w,
            y: 0
        }
        this.image = new Image()
        this.image.src = '../images/lifes.png'
        this.lifesSpeed = 8
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.lifesPos.x,
            this.lifesPos.y,
            this.lifesSize.w,
            this.lifesSize.h)

        this.move() //preguntar porque es necesario aqui 
    }

    move() {


        this.lifesPos.y += this.lifesSpeed
    }

    clear() {

    }
}