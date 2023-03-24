/* exported isAnagram */
const isAnagram = (str1, str2) => {
  str1 = str1.split('');
  str2 = str2.split('');
  for (let i = 0; i < str2.length; i++) {
    // skip spaces in str2
    if (str2[i] === ' ') {
      i++;
    }
    // check presence of str2 char in str1
    if (str1.includes(str2[i])) {
      // if present delete from existence
      const index = str1.indexOf(str2[i]);
      str1.splice(index, 1);
    } else {
      // if not present return false
      return false;
    }
  }
  return true;
};
