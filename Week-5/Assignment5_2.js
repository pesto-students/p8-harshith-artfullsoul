const isVowel = (char) => {
    return "aeiou".includes(char);
}
console.log(isVowel("a"))

const vowelCount = (str) => 
{
    var map = new Map();
    str = str.toLowerCase()
    for(let char of str)
    {
        if(isVowel(char))
        {
            if(map.has(char))
                map.set(char,(map.get(char)+1))
            else
                map.set(char,1)
        }
    }
    return map;
}
console.log(vowelCount("aaAAaaiiiieeeeoffoouuuu"))