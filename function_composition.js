getUsername = function () {
    return "Jay";
}

addMrPrefix = function (username) {
    return "Mr ".username;
}

console.log(addMrPrefix(getUsername()))



function compose(f1, f2) {
    return function (x) {
        return f2(f1(x));
    }
}

function history() {
    return [
        "mkdir test",
        "cd test",
        "ls -la",
        "vim testapp.js",
        "node testapp.js"
    ]
}

function grep(source, filter) {
    var filteredSource = source.filter((e) = > {
            return e.includes(filter);
});

    return filteredSource;
}

function printElements(list) {
    list.forEach((x) = > console.log(x));
}

searchInHistory = compose()


printElements(grep(history(), "node"))
// prints: node testapp.js



printUsernameWithPrefix = compose(getUsername, addMrPrefix);

console.log(printUsernameWithPrefix())