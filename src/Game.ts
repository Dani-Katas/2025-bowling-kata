class Frame {
  private rolls: Array<number> = []

  addRoll(roll: number) {
    this.rolls.push(roll)
  }

  isSpare() {
    return this.rolls.length === 2 && this.rolls[0] + this.rolls[1] === 10
  }

  isStrike() {
    return this.rolls.length === 1 && this.rolls[0] === 10
  }

  getScore(nextFrame?: Frame) {
    if (!this.hasEnded()) {
      return 0
    }

    if (this.isSpare() && nextFrame) {
      return this.rolls.reduce((a, b) => a + b, 0) + (nextFrame.rolls[0] || 0)
    }

    if (this.isStrike() && nextFrame) {
      return this.rolls.reduce((a, b) => a + b, 0) + nextFrame.getScore()
    }

    return this.rolls.reduce((a, b) => a + b, 0)
  }

  hasEnded() {
    return this.rolls.length === 2 || this.isStrike()
  }
}

export class Game {
  private frames: Array<Frame> = []

  private currentFrame: Frame = new Frame()

  score() {
    return this.allFrames().reduce((a, b, i) => {
      return a + b.getScore(this.allFrames()[i + 1])
    }, 0)
  }

  private allFrames() {
    return [...this.frames, this.currentFrame]
  }

  roll(amount: number) {
    this.currentFrame.addRoll(amount)

    if (this.currentFrame.hasEnded()) {
      this.frames.push(this.currentFrame)
      this.currentFrame = new Frame()
    }
  }
}
