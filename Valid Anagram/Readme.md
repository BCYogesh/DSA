# Anagram Checker

This program checks if two strings are **anagrams** of each other.  
An anagram means both strings must contain the same characters with the same frequency, but possibly in different orders.

---

## Code

```javascript
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  // Count frequency of each character in string `s`
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Check characters in string `t`
  for (const char of t) {
    if (!map.has(char) || map.get(char) === 0) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
};
```
