class Lab {
    constructor(ctx, canvasSize,) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.labSize = {
            w: 70, h: 70
        }
        this.labPos = {
            x: Math.random() * (canvasSize.w - this.labSize.w),
            y: 0
        }
        this.image = new Image()
        this.image.src = './images/lab.png'
        this.labSpeed = 3
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.labPos.x,
            this.labPos.y,
            this.labSize.w,
            this.labSize.h)

        this.move()
    }

    move() {


        this.labPos.y += this.labSpeed
    }
}