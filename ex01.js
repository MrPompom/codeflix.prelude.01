function lowercase(str)
{
    var test[];
    for (var i = 0; i < str.length;i += 1) 
    {
        if (str[i] < 'Z' && str[i] > 'A')
        test[i] = str[i].charCodeat(0) - 32;
        else
        test[i] = str[i].charCodeat(0);

        test = String.fromCharCode(...test);
    }
    console.log(test);
}

lowercase('Chopper');
lowercase('TONY TONY');