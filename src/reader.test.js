const reader = require("./reader");

describe("CSV reader", () => {
  it("reads first line from a csv", () => {
    const oneLineArray = ["John", "Doe", "34", "M", "Akron", "OH"];
    expect(reader.createArray("./src/files/oneLine.csv")).toEqual([
      oneLineArray
    ]);
  });

  it("reads multiple lines from a csv", () => {
    const multiLineArray = [
      ["John", "Doe", "34", "M", "Akron", "OH"],
      ["Jane", "Smith", "32", "F", "Detroit", "MI"],
      ["Mike", "White", "28", "M", "Sacramento", "CA"]
    ];
    expect(reader.createArray("src/files/multiLines.csv")).toEqual(
      multiLineArray
    );
  });
});
