function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key]);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
        result.push(callback(item));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;

    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }

    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (const key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        return valA > valB ? 1 : -1;
    });
}

function myFlatten(array, shallow = false, newArr = []) {
    for (const item of array) {
        if (Array.isArray(item) && !shallow) {
            myFlatten(item, false, newArr);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}