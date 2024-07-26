//hash table
let unique = (arr) => {
    let map = {};
    let result = [];
    for(let i = 0; i < arr.length; i++){
        var word = arr[i];
        map[word] = (map[word] || 0) + 1
    }

    for(let i = 0; i < arr.length; i++){
        var word = arr[i];
        if(map[word] == 1) result.push(word)
    }

    return result;

}

var res = unique(['apples', 'oranges', 'flowers', 'apples'])
console.log(res)


