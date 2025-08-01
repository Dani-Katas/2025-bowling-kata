import { describe, expect, it } from "vitest"
import { Game } from "./Game.js"

describe("Game", () => {
  it("starts initial score at 0", () => {
    const game = new Game()

    expect(game.score()).toBe(0)
  })

  it("keeps the score at 0 after one roll", () => {
    const game = new Game()

    game.roll(1)

    expect(game.score()).toBe(0)
  })

  it("updates the score after a frame", () => {
    const game = new Game()

    game.roll(1)
    game.roll(0)

    expect(game.score()).toBe(1)
  })

  it("returns the total score after a frame", () => {
    const game = new Game()

    game.roll(1)
    game.roll(1)

    expect(game.score()).toBe(2)
  })

  it("does not add the third roll to the score of the first frame", () => {
    const game = new Game()

    game.roll(1)
    game.roll(1)
    game.roll(1)

    expect(game.score()).toBe(2)
  })

  it("adds on the fourth score", () => {
    const game = new Game()

    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)

    expect(game.score()).toBe(4)
  })

  it("sums next roll after spare", () => {
    const game = new Game()

    game.roll(5)
    game.roll(5)
    game.roll(1)

    expect(game.score()).toBe(5 + 5 + 1)
  })

  it("calculates the score correctly after a spare and additional rolls", () => {
    const game = new Game()

    game.roll(5)
    game.roll(5)
    game.roll(1)
    game.roll(2)

    expect(game.score()).toBe(5 + 5 + 1 + (1 + 2))
  })
})
