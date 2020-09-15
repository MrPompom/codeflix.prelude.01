function lowerCase(str)
{
  // string.charCodeAt()
  var test = [];
  for (var i = 0; i < str.length; i += 1) 
  {
    if (str[i] < 'z' && str[i] > 'a') {
      test[i] = (str[i].charCodeAt(0) - 32);
    }
    else
    test[i] = str[i].charCodeAt(0);
  }
   test = String.fromCharCode(...test);
   

  console.log(test);
}

lowerCase('Chopper');

lowerCase('tony tony');