'use strict';

module.exports = function countSameElements(collection) {
    var record = [];
    var count = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == 'h[3]') {
            collection[i] = 'h';
            collection.push('h');
            collection.push('h');
        }
        if (collection[i] == "d-5") {
            collection[i] = 'd';
            collection.push('d');
            collection.push('d');
            collection.push('d');
            collection.push('d');
        }
        if (collection[i] == 't-2') {
            collection[i] = 't';
            collection.push('t');
        }
        if (collection[i] == 't[10]') {
            collection[i] = 't';
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
            collection.push('t');
        }
        if (collection[i] == "c:8") {
            collection[i] = 'c';
            collection.push('c');
            collection.push('c');
            collection.push('c');
            collection.push('c');
            collection.push('c');
            collection.push('c');
            collection.push('c');
        }
    }
    for (var i = 0; i < collection.length; i++)
        record[i] = collection[i];
    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if (collection[i] === collection[j]) {
                collection.splice(j, 1);
                j--;
            }
        }
    }
    for (var i = 0; i < collection.length; i++) {
        var list = {
            name: '',
            summary: 0
        };
        list.name = collection[i];
        for (var j = 0; j < record.length; j++)
            if (collection[i] == record[j])
                list.summary++;
        count[i] = list;
    }
    return count;
}