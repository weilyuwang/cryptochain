const { GENESIS_DATA, INITIAL_DIFFICULTY } = require("./config");
const cryptoHash = require("./crypto-hash");

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  //  A Genesis Block is the name given to the first block a cryptocurrency
  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({ lastBlock, data }) {
    let hash, timestamp;
    const lastHash = lastBlock.hash;
    const difficulty = lastBlock.difficulty;
    // we want the nonce value to be dynamically adjustable
    let nonce = 0;

    do {
      // update nonce and timestamp until we found a solution
      nonce++;
      timestamp = Date.now();
      hash = cryptoHash(timestamp, lastHash, data, nonce, difficulty);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty));

    return new this({
      timestamp,
      lastHash,
      data,
      difficulty,
      nonce,
      hash,
    });
  }
}

module.exports = Block;
