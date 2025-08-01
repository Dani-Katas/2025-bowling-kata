export class Game {
  private scoreAmount = 0

  score() {
    return this.scoreAmount
  }

  roll(amount: number) {
    this.scoreAmount = amount
  }
}
