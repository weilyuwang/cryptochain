const MINE_RATE = 1000; // 1 sec
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: "______",
  hash: "hash-one",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
};

module.exports = { GENESIS_DATA, MINE_RATE };
