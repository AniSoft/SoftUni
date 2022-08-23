function rightPlace(str, char, match) {

    let tmp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '_') {
            tmp += char;
        } else {
            tmp += str[i];
        }
    }

    if (tmp == match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace("'Str_ng', 'I', 'Strong'");
rightPlace("'Str_ng', 'i', 'String'");