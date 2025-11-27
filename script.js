
function convertToRoman(num) {
  num = Number(num);

  if (num === 0) return "";  // Roman numerals have no zero

  const symbols = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1]
  ];

  let result = "";

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

// Example usage:
alert(convertToRoman(number));
