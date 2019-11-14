function doMatchAll() {
    const regex = /[a]/g;
    const str = 'a a a';

    return str.matchAll(regex);
}

export default doMatchAll;
