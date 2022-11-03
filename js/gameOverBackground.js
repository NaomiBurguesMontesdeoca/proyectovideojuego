class GameOverBackground {
    constructor(ctx, canvasSize) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.gameOverPos = {
            x: 0,
            y: 0
        }

        this.image = new Image()
        this.image.src = "./images/gameOver.jpg"
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.gameOverPos.x,
            this.gameOverPos.y,
            this.canvasSize.w,
            this.canvasSize.h)
    }
}