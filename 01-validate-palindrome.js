function validatePalindrome(str) {
  // Your implementation

  let s = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome;

// Alternative solution using built-in methods

/*
function validatePalindrome(str) {
  let s = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = s.split("").reverse().join("");
  return s === reversed;
}
*/
