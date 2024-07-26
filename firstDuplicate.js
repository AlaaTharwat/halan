let firstDup = (arr) => {
    let map = {};

    for(let i = 0; i < arr.length; i++){
        let val = arr[i];
        let index = map[val];
        if(index) return i;

        map[val] = i
    }

    return -1
}

var res = firstDup([ 5, 17, 3, 17, 4, -1 ])
console.log(res)