function lowerCase(str)
{
    var test = [];
    for (var i = 0; i < str.length; i += 1) 
    {
        if (str[i] < 'Z' && str[i] > 'A') {
        console.log("1");
        test[i] = (str[i].charCodeAt(0) + 32);
    }
        else {
            test[i] = str[i].charCodeAt(0);
            console.log("2");
        }

        test = String.fromCharCode(...test);
    }
    console.log(test);
}

lowerCase('Chopper');
lowerCase('TONY TONY');