module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  const result = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  for(let j = 0; j < str.length; j++){
    result[result.length - 1] === brackets[str[j]] && result.length > 0 ? result.pop() : result.push(str[j]);
  }
  return result.length === 0;
}
