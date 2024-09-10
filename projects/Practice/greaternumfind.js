function int(array) {
    const num = array.filter((i, index) => {
        return i > 10
    })
    return num
    // return num.length
}
console.log(int([10, 3, 60, 38, 26, 16, 3, 9, 29]));

