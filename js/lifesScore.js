class LifesScore {
    constructor(ctx, canvasSize,) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.lifesScoreSize = {
            w: 30, h: 30
        }
        this.lifesScorePos = {
            x: canvasSize.w - this.lifesScoreSize.w - 30,
            y: 30
        }
        this.image = new Image()
        this.image.src = '../images/lifes.png'
        // this.text = 3
    }

    draw() {

        this.ctx.drawImage(
            this.image,
            this.lifesScorePos.x,
            this.lifesScorePos.y,
            this.lifesScoreSize.w,
            this.lifesScoreSize.h)
    }

    // drawText(text) {
    //     this.ctx.font = '30px arial'
    //     this.ctx.fillStyle = '#D21404'
    //     this.ctx.fillText(text, this.lifesScorePos.x - this.lifesScoreSize.w, this.lifesScorePos.y + this.lifesScoreSize.h - 5)
    // }
}


