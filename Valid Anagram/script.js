var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
 
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for(const char of t) {
    if(!map.has(char) || map.get(char) === 0) return false
    map.set(char,map.get(char) - 1)
  }
  return true;
};

console.log(isAnagram("aacc", "ccac"));
