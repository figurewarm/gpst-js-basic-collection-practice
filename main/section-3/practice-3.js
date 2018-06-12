'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var noRepeatCollection = [];
    for (let i = 0; i < collectionA.length; i++)
        noRepeatCollection[i] = collectionA[i]
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
        for (let j = 0; j < collectionA.length; j++) {
            if (noRepeatCollection[i] == collectionA[j])
                result[i].count++;
        }
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < objectB.value.length; j++)
            if (result[i].key == objectB.value[j])
                result[i].count -= Math.floor(result[i].count / 3)
    }
    return result;
}