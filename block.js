class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

//  A Genesis Block is the name given to the first block a cryptocurrency

module.exports = Block;
