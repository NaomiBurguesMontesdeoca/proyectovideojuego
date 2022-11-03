class Monster {
    constructor(ctx, canvasSize,) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.monsterSize = {
            w: 50, h: 50
        }
        this.monsterPos = {
            x: Math.random() * (canvasSize.w - this.monsterSize.w),
            y: 0
        }
        this.image = new Image()
        this.image.src = './images/pngwing.com.png'
        this.monsterSpeed = 5
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.monsterPos.x,
            this.monsterPos.y,
            this.monsterSize.w,
            this.monsterSize.h)

        this.move()
    }

    move() {
        this.monsterPos.y += this.monsterSpeed
    }

    clear() {

    }
}