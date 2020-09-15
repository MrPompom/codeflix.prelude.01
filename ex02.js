function upperCase(src)
{
  // string.charCodeAt()
  var str = [];

  for (var i = 0; i < src.length; i += 1) 
  {
    if (src[i] < 'z' && src[i] > 'a')
      str[i] = (src[i].charCodeAt(0) - 32);

    else
    str[i] = src[i].charCodeAt(0);
  }
   str = String.fromCharCode(...str);

  console.log(str);
}

upperCase('Chopper');

upperCase('tony tony');