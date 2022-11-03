class Player {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerSize = {
            w: 120, h: 120
        }
        this.playerPos = {

            x: canvasSize.w / 2 - this.playerSize.w / 2,
            y: canvasSize.h - this.playerSize.h - 30
        }
        this.playerVel = 20

        this.image = new Image()
        this.image.src = "./images/player.png"
        // this.image.frames = 3
        // this.image.framesIndex = 1
    }



    draw() {
        this.ctx.drawImage(
            this.image,
            // this.image.framesIndex * (this.image.width / this.image.frames),
            this.playerPos.x,
            this.playerPos.y,
            this.playerSize.w,
            this.playerSize.h)
    }

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    if (this.playerPos.x > 0) {
                        this.playerPos.x -= this.playerVel
                    }
                    this.image.frames
                    break;
                case 'ArrowRight':
                    if (this.playerPos.x < this.canvasSize.w - this.playerSize.w) {
                        this.playerPos.x += this.playerVel
                    }
                    break;
                case ' ':
                    event.preventDefault()
                    break;
            }
        }

    }
}