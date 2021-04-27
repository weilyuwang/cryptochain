const cryptoHash = require("./crypto-hash");
const hexToBinary = require("hex-to-binary");

const TEXT = "foo";
const HASHED_TEXT =
  "2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae";

describe("cryptoHash()", () => {
  it("generates a SHA-356 hashed output", () => {
    expect(cryptoHash(TEXT)).toEqual(hexToBinary(HASHED_TEXT));
  });

  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });
});
