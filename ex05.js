function decapitalize(src)
 {
     var str = [];

     if (src[0] < 'Z' && src[0] > 'A')
        str[0] = (src[0].charCodeAt(0) + 32);

    else
        str[0] = src[0].charCodeAt(0);

    for (var i = 1; i < src.length; i += 1)
    {
        if (src[i] < 'Z' && src[i] > 'A' && src[i - 1] == ' ')
            str[i] = (src[i].charCodeAt(0) + 32);

        else
                str[i] = src[i].charCodeAt(0);
    }
    str = String.fromCharCode(...str);

    console.log(str);
 }

 decapitalize('one Code');
 decapitalize('One CODE');
 decapitalize('one COdE');