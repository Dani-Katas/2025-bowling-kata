import { describe, expect, it } from "vitest"
import { Game } from "./Game.js"

describe("Game", () => {
  it("starts initial score at 0", () => {
    const game = new Game()

    expect(game.score()).toBe(0)
  })

  it("updates the score with a roll", () => {
    const game = new Game()

    game.roll(1)

    expect(game.score()).toBe(1)
  })
})
