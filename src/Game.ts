export class Game {
  private rollsAmount: number = 0

  private scoreAmount: number = 0

  score() {
    if (this.rollsAmount >= 2) {
      return this.scoreAmount
    }

    return 0
  }

  roll(amount: number) {
    this.rollsAmount++

    if (this.rollsAmount <= 2) {
      this.scoreAmount += amount
    }
  }
}
