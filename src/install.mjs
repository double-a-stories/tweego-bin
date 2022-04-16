import installTweego from "./installTweego.mjs";

(async () => {
    try {
        await installTweego();
    } catch (err) {
        console.err(`Error: ${err}`);
    }
})();