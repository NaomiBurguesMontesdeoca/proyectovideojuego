class Background {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.backgroungPos = {
            x: 0,
            y: 0
        }

        this.image = new Image()
        this.image.src = "../images/background.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.backgroungPos.x, this.backgroungPos.y, this.canvasSize.w, this.canvasSize.h)
    }
}
