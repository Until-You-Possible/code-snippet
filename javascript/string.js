

 string = {
     camelize: function (sString) {
         const rCamelCase = /-(.)/ig;
         return sString.replace(rCamelCase, function (sMatch, sChar) {
             return sChar.toUpperCase();
         }); // // camelize("foo-bar"); // fooBar
     },
     // @param {string} sString String for which first character should be converted
     capitalize:function (sString) {
         return sString.charAt(0).toUpperCase() + sString.substring(1);
     },
     // sString camel case string
     hyphenate: function (sString) {
         const rHyphen = /([A-Z])/g;
         return sString.replace( rHyphen, function(sMatch, sChar) {
             return "-" + sChar.toLowerCase();
         });
     }
 }