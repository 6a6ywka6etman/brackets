module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
      return false;
  }
  let brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      brackets[i] = bracketsConfig[i][0] + bracketsConfig[i][1];  
  }
  console.log(brackets);
  let flag = 0;

  while(str.length !==0){
      flag = 0;
      for (let i = 0; i < brackets.length; i++) {
          if(str.indexOf(brackets[i]) !== -1){
              str = str.replace(brackets[i], '');      
          }else{
              flag+=1;
          }
      }
      if (flag === brackets.length) {
          return false;
      }
  }
  return true;

}
