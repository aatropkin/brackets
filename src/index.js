module.exports = function check(str, bracketsConfig) {
  while (str.length > 0){
    length = str.length;
    for (let pair of bracketsConfig){
      str = str.replace(pair[0] + pair[1],"");
    }
    if (length === str.length){
      return false;
    }
  }
  return true;
}
