
const stringReverse = string => {
    let stringarr = string.split("");
    stringarr = stringarr.reverse();
    stringarr = stringarr.join("");
    return stringarr;
}

const stringLength = string => {
    return string.length;
}

const capitalize = str => {
    let str1= str.charAt(0).toUpperCase() 
    str1+=str.slice(1).toLowerCase();
    return str1;
}

module.exports = {
    method: stringLength,
    secMethod: stringReverse,
    thirdMethod:capitalize,
};