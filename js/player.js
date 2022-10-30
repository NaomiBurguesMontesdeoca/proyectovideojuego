class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerSize = {
            w: 100, h: 100
        }
        this.playerPos = {
            x: canvasSize.w / 2 - this.playerSize.w / 2,
            y: canvasSize.h - this.playerSize.h - 50
        }
        this.playerVel = 20

        this.image = new Image()
        this.image.src = "../images/player.png"
        // this.image.frames = 3
        // this.image.framesIndex = 0
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.playerPos.x,
            this.playerPos.y,
            this.playerSize.w,
            this.playerSize.h)
    }

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.playerPos.x -= this.playerVel
                    break;
                case 'ArrowRight':
                    this.playerPos.x += this.playerVel
                    break;
            }
        }
    }
}