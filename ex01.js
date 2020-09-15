function lowerCase(src)
{
  // string.charCodeAt()
  var str = [];

  for (var i = 0; i < src.length; i += 1) 
  {
    if (src[i] < 'Z' && src[i] > 'A')
      str[i] = (src[i].charCodeAt(0) + 32);

    else
    str[i] = src[i].charCodeAt(0);
  }
   str = String.fromCharCode(...str);

  console.log(str);
}

lowerCase('Chopper');

lowerCase('tony tony');