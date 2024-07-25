/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let count1 = {}
  let count2 = {}
  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    count2[str2[i]] = (count2[str2[i]] || 0) + 1;
  }
  for (const char in count1) {
    if (count1[char] !== count2[char]) {
      return false;
    }
  }
  return true;
}

//alternative method

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Convert both strings to the same case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}


module.exports = isAnagram;
