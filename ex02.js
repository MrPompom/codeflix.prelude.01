function uppercase(str)
{
    var test[];
    for (var i = 0; i < str.length;i += 1) 
    {
        if (str[i] < 'z' && str[i] > 'a')
        test[i] = str[i].charCodeat(0) - 32;
        else
        test[i] = str[i].charCodeat(0);

        test = String.fromCharCode(...test);
    }
    console.log(test);
}

uppercae('Chopper');
uppercase('tony tony');