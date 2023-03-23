/* exported getWords */
const getWords = str => {
  if (str === '') {
    return [];
  }
  return str.split(' ');
};
