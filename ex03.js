function length(str)
{
    var taille = 0;
    for (var i = 0; str[i].charCodeAt(0) != -1; i += 1, taille += 1)
    {
        console.log("t");
    }
    console.log(taille);
}

length('chOpper');
length('test');