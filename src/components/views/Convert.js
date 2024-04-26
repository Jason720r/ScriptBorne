const convertString = (string) => {
    let num = 0;
    for (i = 0; i < string.length; i++) {
        num = num * 10 + string.charCodeAt(i) - 48;
    }
    return num;

}

console.log(convertString("12345"));cd 