function urlChecker(inputForm) {
    const url = /^https?:\/\//gi
    return url.test(inputForm);
}

export { urlChecker }