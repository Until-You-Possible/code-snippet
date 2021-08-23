

function camelize(sString) {
    const rCamelCase = /-(.)/ig;
    return sString.replace(rCamelCase, function (sMatch, sChar) {
        return sChar.toUpperCase();
    }); // // camelize("foo-bar"); // fooBar
}

function capitalize(sString) {
    return sString.charAt(0).toUpperCase() + sString.substring(1);
}

function hyphenate(sString) {
    const rHyphen = /([A-Z])/g;
    return sString.replace( rHyphen, function(sMatch, sChar) {
        return "-" + sChar.toLowerCase();
    });
}
