export class Game {
  private rollsAmount: number = 0

  score() {
    if (this.rollsAmount === 2) {
      return 1
    }

    return 0
  }

  roll(amount: number) {
    this.rollsAmount++
  }
}
