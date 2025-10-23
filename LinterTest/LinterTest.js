"use strict";
var Intertest;
(function (Intertest) {
    let KEY;
    (function (KEY) {
        KEY[KEY["POS"] = 1] = "POS";
        KEY[KEY["NEG"] = -1] = "NEG";
    })(KEY || (KEY = {}));
    const info = { text: "G`udetmvhsgBncd1 ", key: KEY.POS };
    console.log(deCrypt(info.text, info.key));
    function deCrypt(_text, _key) {
        let result = "";
        for (let i = 0; i < _text.length; i++) // until i is 20, it returns a result (alphabet +1)
            result += String.fromCharCode(_text.charCodeAt(i) + _key);
        return result;
    }
    //enum key {
    //  Pos = 1, neg = -1
    // }
})(Intertest || (Intertest = {}));
//# sourceMappingURL=LinterTest.js.map