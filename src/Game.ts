export class Game {
  private rollsAmount: number = 0

  private scoreAmount: number = 0

  private rolls: number[] = []

  score() {
    return this.consolidatedRolls().reduce((a, b) => a + b, 0)
  }

  consolidatedRolls() {
    const end = this.rolls.length - (this.rollsAmount % 2 === 0 ? 0 : 1)
    return this.rolls.slice(0, end)
  }

  roll(amount: number) {
    this.rolls.push(amount)

    this.rollsAmount++

    if (this.rollsAmount <= 2) {
      this.scoreAmount += amount
    }
  }
}
