window.webpackChunkdiscord_app.push([
    [Symbol()],
    {},
    req => {
        if (!req.c) return;
        for (let m of Object.values(req.c)) {
            try {
                if (!m.exports || m.exports === window) continue;
                if (m.exports?.getToken) return copy(m.exports.getToken());
                for (let ex in m.exports) {
                    if (m.exports?.[ex]?.getToken && m.exports[ex][Symbol.toStringTag] !== 'IntlMessagesProxy') return copy(m.exports[ex].getToken());
                }
            } catch {}
        }
    },
]);

window.webpackChunkdiscord_app.pop();
console.log('%cWorked!', 'font-size: 50px');
console.log('%cYou now have your token in the clipboard!', 'font-size: 16px');
