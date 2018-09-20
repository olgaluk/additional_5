module.exports = function check(str, bracketsConfig) {
  // your solution
  var arrParam = bracketsConfig;
  var strParam = str;
  
  var strArray = strParam.split('');
  for (var i=0; i<arrParam.length; i++) {
    for (var j=0; j<strArray.length; j++) {
     while ((strArray[j] == arrParam[i][0]) &&  (strArray[j+1] == arrParam[i][1])) {
      strArray.splice(j,2);
      j=0;
      i=0;
     }
    }
  }
  
  return (strArray == 0);
  }