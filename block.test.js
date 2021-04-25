const Block = require("./block");

describe("Block", () => {
  const timestamp = "test-timestamp";
  const lastHash = "test-lastHash";
  const hash = "test-hash";
  const data = "test-data";
  const block = new Block(timestamp, lastHash, hash, data);
  it("has a timestamp, lastHash, hash and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
