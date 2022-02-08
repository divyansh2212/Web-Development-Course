add = (a, b) => {
    return a + b;
}

sub = (a, b) => {
    return a - b;
}

multi = (a, b) => {
    return a * b;
}

let name = "Divyansh"

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.multi = multi;
// module.exports.name = name;

module.exports = { add, sub, name, multi };