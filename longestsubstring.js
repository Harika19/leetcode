//longest-substring-without-repitation
//harika
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   if(s.length>0){
  let c = 0;
  for (let i = 0; i < s.length; i++) {
    let posi = s.charAt(i);
    let a = new Set(posi);
    for (let j = i + 1; j < s.length; j++) {
      let posj = s.charAt(j);
      if (a.has(posj)) {
        break;
      } else {
        a.add(posj);
      }
      c = Math.max(c, a.size);
    }
  }
  if(c == 0 ){
    return 1;
  }else{
    return c;
  }
  }
  return 0;
};
//console.log(lengthOfLongestSubstring('asdrae'));
