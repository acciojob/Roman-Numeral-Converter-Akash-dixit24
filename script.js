function convertToRomanLarge(num) {
  if (num === 0) return "N";
  if (num < 0 || num > 100000) return "Out of range (0-100000)";

  const romanMatrix = [
    [100000, 'C_'], [90000, 'XC_'], [50000, 'L_'], [40000, 'XL_'], [10000, 'X_'],
    [9000, 'MX_'], [5000, 'V_'], [4000, 'MV_'], [1000, 'M'], [900, 'CM'],
    [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'],
    [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  let result = '';
  for (let i = 0; i < romanMatrix.length; i++) {
    const [value, numeral] = romanMatrix[i];
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

// Function to handle the user interface action
function handleConversion() {
  const inputVal = document.getElementById("userInput").value;
  
  // Convert text string input into an integer number base 10
  const parsedNum = parseInt(inputVal, 10);

  if (isNaN(parsedNum)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  const romanResult = convertToRomanLarge(parsedNum);
  document.getElementById("result").innerText = romanResult;
}
