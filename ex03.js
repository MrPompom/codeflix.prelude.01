function length(src)
{
    var char_number = 0;

    for (var i = 0; ; i += 1)
    {
        if (src[i] == undefined)
        break;
        
        char_number += 1;
    }
    console.log(char_number);
}

length('chOpper est nul');
length('test');