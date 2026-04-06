function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay)
    })
}
delayedLog('Hello World!', 2000);