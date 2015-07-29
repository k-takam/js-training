// アルファベットを計上してオブジェクトで返却する関数を実装して下さい
// abcという文字列を渡した時に、{a: 1, b: 1, c: 1}という値を返すようにします。
// 記号は計上せず、大文字がある場合は小文字として同じアルファベットに計上します。
module.exports = function(string) {
    var ret = {};
    var strArr = string.toLowerCase().match(/[a-z]/g);

    strArr.forEach(function(elm, i, arr) {
        var count = 0;

        arr.map(function(current) {
            if(current === elm) count++;
        });

        ret[elm] = count;
    });

    return ret;
};
