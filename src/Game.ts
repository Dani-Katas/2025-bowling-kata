export class Game {
  private rollsAmount: number = 0

  private frames: Array<number> = []

  private currentFrameScore: number = 0

  score() {
    return this.frames.reduce((a, b) => a + b, 0)
  }

  roll(amount: number) {
    if (this.rollsAmount === 0) {
      this.currentFrameScore = amount
      this.rollsAmount++

      if (this.frames.at(-1) === 10) {
        this.frames[this.frames.length - 1] += amount
      }
    } else {
      this.frames.push(this.currentFrameScore + amount)
      this.rollsAmount = 0
    }
  }
}
