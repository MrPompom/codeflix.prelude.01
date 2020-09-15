function capitalize(str, rest)
 {
     var cap = [];
     if (str[0] < 'z' && str[0] > 'a')
        cap[0] = (str[0].charCodeAt(0) - 32);
        else
        cap[0] = str[0].charCodeAt(0);
        for (var i = 1; i < str.length; i += 1)
        {
            if (str[i] < 'Z' && str[i] > 'A' && rest == true) {
                cap[i] = (str[i].charCodeAt(0) + 32);
              }
              else
              cap[i] = str[i].charCodeAt(0);
        }
        cap = String.fromCharCode(...cap);

        console.log(cap);
 }

 capitalize('one Code');
 capitalize('one CODE', true);
 capitalize('one COdE');