function capitalize(src, lower_rest)
 {
     var str = [];

    if (src[0] < 'z' && src[0] > 'a')
        str[0] = (src[0].charCodeAt(0) - 32);

    else
        str[0] = src[0].charCodeAt(0);

    for (var i = 1; i < src.length; i += 1)
    {
        if (src[i] < 'Z' && src[i] > 'A' && lower_rest == true)
            str[i] = (src[i].charCodeAt(0) + 32);
              
        else
            str[i] = src[i].charCodeAt(0);
    }
    str = String.fromCharCode(...str);

    console.log(str);
 }

 capitalize('one Code');
 capitalize('one CODE', true);
 capitalize('one COdE');