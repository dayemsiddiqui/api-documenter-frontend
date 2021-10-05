/**
 * List of Domain Concepts:
 * Participant:
 * PokerGame:
 * Vote:
 * Room:
 */

/**
 * TODO: Model Poker Game state and Vote State Separately
 * Poker Game has following two states: Visible, Hidden
 * Vote Itself has two states:  Voted, Pending
 * Domain Rules:
 * - If any of the vote is Pending then the game state cannot be Visible
 */

export * from "./Card.model";
export * from "./VoteValue";
