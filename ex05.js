function decapitalize(str)
 {
     var cap = [];
     if (str[0] < 'Z' && str[0] > 'A')
        cap[0] = (str[0].charCodeAt(0) + 32);
        else
        cap[0] = str[0].charCodeAt(0);
        for (var i = 1; i < str.length; i += 1)
        {
            if (str[i] < 'Z' && str[i] > 'A' && str[i - 1] == ' ') {
                cap[i] = (str[i].charCodeAt(0) + 32);
              }
              else
              cap[i] = str[i].charCodeAt(0);
        }
        cap = String.fromCharCode(...cap);

        console.log(cap);
 }

 decapitalize('one Code');
 decapitalize('One CODE', true);
 decapitalize('one COdE');