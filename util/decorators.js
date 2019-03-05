function ifPageIsLoaded(callback) {
    let result = callback();
    if (!result) {
        throw "Page isn't loaded!"
    }
}