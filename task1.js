const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("first"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("second"), 500);
});

customPromiseAll([p1, p2]);
// Should implement and work to resolve both promises by imitating Promise.all functionality. Don’t use Promise.all.

function customPromiseAll(promises) {
    const done = false;
    do {
        // console.log("do");
        let p1Ready = null
        const p1 = promises[0];
        p1.finally(() => {
            p1Ready = true;
            console.log("p1Ready");
        });

        let p2Ready = null;
        const p2 = promises[1];
        p2.finally(() => { p2Ready = true; });

        if (p1Ready && p2Ready) {
            done = true;
        }
    } while (!done);
    console.log("done");
    return true;
}