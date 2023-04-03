function is_dateString(str) {
    regexp = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/[12][0-9]{3}$/
    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(is_dateString("01/01/2015")); //true
console.log(is_dateString("20/05/2015"))  //true
console.log(is_dateString("32/01/2015")) //false