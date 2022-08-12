function Longest(a, b) {
    if (a.length >= b.length)
        return a;
    else
        return b;
}
console.log(Longest('12', '123'));
console.log(Longest([1, 2], [1, 2, 3, 4]));
