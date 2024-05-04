const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Welcome <3");
        }
    })
})

