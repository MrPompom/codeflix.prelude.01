function length(str)
{
    var t = 0;
    var test = [];
    for (var i = 0; ; i += 1)
    {
        if (str[i] == undefined)
        break;
        t += 1;
    }
    console.log(t);
}

length('chOpper est nul');
length('test');