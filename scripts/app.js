if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("scripts/'sw.js")
    .then(() => console.log("Registered"))
    .catch(() => console.log("Error"))
}