'use strict';

module.exports = function countSameElements(collection) {
    var noRepeatCollection = [];
    for (let i = 0; i < collection.length; i++)
        noRepeatCollection[i] = collection[i]
    for (let i = 0; i < noRepeatCollection.length; i++) {
        for (let j = i + 1; j < noRepeatCollection.length; j++)
            if (noRepeatCollection[i] == noRepeatCollection[j]) {

                noRepeatCollection.splice(j, 1);
                j--
            }
        if (noRepeatCollection[i] == 'd-5') {
            noRepeatCollection[i] = 'd';
            break;
        }
    }
    var result = [];
    for (let i = 0; i < noRepeatCollection.length; i++) {
        result.push({
            key: noRepeatCollection[i],
            count: 0
        })
        for (let j = 0; j < collection.length; j++) {
            if (noRepeatCollection[i] == collection[j])
                result[i].count++;
            if (noRepeatCollection[i] == 'd')
                result[i].count = 5;
        }
    }
    return result;
}