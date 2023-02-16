// 试寻找字符串中，连续重复次数最多的字符
let str = 'aaaaaaabbbbbbbbbbbccccccccccccccccccccccddddddddd'

let i = 0
let j = 1

let maxRepeatCount = 0
let maxRepeatChar = ''

while (i <= str.length - 1) {
    if (str[i] !== str[j]) {
        console.log(`${i}和${j}之间的字母${str[i]}连续重复了${j-i}次`)
        if (j - i > maxRepeatCount) {
            maxRepeatCount = j - i
            maxRepeatChar = str[i]
            }
        i = j
    }
    j++
}
console.log(`字母${maxRepeatChar}连续重复次数最多，重复了${maxRepeatCount}次`)
