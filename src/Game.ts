class Frame {
  private rolls: Array<number> = []

  addRoll(roll: number) {
    this.rolls.push(roll)
  }

  isSpare() {
    return this.rolls.length === 2 && this.rolls[0] + this.rolls[1] === 10
  }

  getScore(nextFrame?: Frame) {
    if (!this.hasEnded()) {
      return 0
    }

    console.log("soy un frame", this.rolls, this.isSpare(), nextFrame)
    if (this.isSpare() && nextFrame) {
      console.log("soy un sapre")
      // If this frame is a spare, add the next roll as bonus
      return this.rolls.reduce((a, b) => a + b, 0) + (nextFrame.rolls[0] || 0)
    }

    return this.rolls.reduce((a, b) => a + b, 0)
  }

  hasEnded() {
    return this.rolls.length === 2
  }
}

export class Game {
  private rollsAmount: number = 0

  private frames: Array<number> = []

  private framesNew: Array<Frame> = []

  private currentFrameScore: number = 0

  private currentFrame: Frame = new Frame()

  score() {
    const shaentendi = [...this.framesNew, this.currentFrame]
    console.log("😎", shaentendi)
    return shaentendi.reduce((a, b, i) => {
      console.log("🔩", b, shaentendi[i + 1])
      return a + b.getScore(shaentendi[i + 1])
    }, 0)

    return this.frames.reduce((a, b) => a + b, 0)
  }

  roll(amount: number) {
    if (this.rollsAmount === 0) {
      this.currentFrameScore = amount
      this.rollsAmount++
      this.addSpareBonus(amount)
    } else {
      this.frames.push(this.currentFrameScore + amount)
      this.rollsAmount = 0
    }

    this.currentFrame.addRoll(amount)

    if (this.currentFrame.hasEnded()) {
      this.framesNew.push(this.currentFrame)
      this.currentFrame = new Frame()
    }
  }

  private addSpareBonus(amount: number) {
    if (this.frames.at(-1) === 10) {
      this.frames[this.frames.length - 1] += amount
    }
  }
}
