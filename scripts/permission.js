const button = document.querySelector(".main__button");

button.addEventListener("click", () => {
    Notification.requestPermission()
})

