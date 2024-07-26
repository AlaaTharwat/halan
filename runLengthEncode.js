let runLengthEncode = (text) => {
  let result = "";
  let windowStart = 0;
  let windowEnd = windowStart + 1;

  let n = text.length;

  while (windowStart < n) {
    let count = 1;

    while (windowEnd < n && text[windowEnd] === text[windowStart]) {
      count++;
      windowEnd++;
    }

    result += text[windowStart] + count;
    windowStart = windowEnd++;
  }

  return result;
};


const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);

let runLengthDecode = (text) => {
  let result = "";
  let windowStart = 0;
  let windowEnd = windowStart + 1;

  let n = text.length;

  while (windowStart < n) {
    let char = text[windowStart];
    let num = "";

    while (windowEnd < n && isNumeric(text[windowEnd])) {
      num += text[windowEnd]
      windowEnd++;
    }
    console.log(num)

    result += char.repeat(parseInt(num));
    windowStart = windowEnd++;
  }

  return result;
};

compose = (f1, f2) => (value) => f2(f1(value));
console.log(compose(runLengthEncode, runLengthDecode)("aaaaaaaaaabbbaxxxxyyyzyx"));



    