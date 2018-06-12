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
        }
    }
    return result
}