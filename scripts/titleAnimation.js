const title = 'Monad From Community<3'
const title_to_anim = document.querySelector('#title')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addChar(char) {
    title_to_anim.innerHTML += char;
}

async function removeChar() {
    title_to_anim.innerHTML = title_to_anim.innerHTML.slice(0, -1);
}

async function titleAnimation() {
    while (true) {
        title_to_anim.innerHTML = title[0];
        
        for (let i = 1; i < title.length; i++) {
            addChar('_');
            await sleep(300);
            removeChar();
            await sleep(300);
            addChar(title[i]);
            await sleep(300);
        }
        await sleep(5000);
    }

}

titleAnimation()
