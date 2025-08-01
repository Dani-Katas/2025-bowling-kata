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

  it.skip("??????", () => {
    const game = new Game()

    game.roll(1)
    game.roll(1)
    game.roll(1)
    game.roll(1)

    expect(game.score()).toBe(4)
  })
})
