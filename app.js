// Add in zoom on scroll for Header 
// const zoomOnScroll = document.querySelector(".zoom");
// let zoom = 1;
// const zoomSpeed = 0.1;
// document.addEventListener('scroll', function (e) { 
//     let scrollDirection = e.deltaY > 0 ? "down" : "up";
//     if (scrollDirection === "down"){ 
//         zoomOnScroll.style.transform = `scale(${zoom -= zoomSpeed})`;
//     } else { 
//         zoomOnScroll.style.transform = `scale(${zoom +=zoomSpeed})`;
//     }
//     const minZoom = -1;
//     const maxZoom = 3; 
    
//     if (zoom < minZoom) {
//         zoom = minZoom;
//     } else if (zoom > maxZoom) {
//         zoom = maxZoom;
//     }
//     });

    //mobile formatting
    // if (window.screen.width) <= 600 { 
    //     const portfolio = document.querySelector(".portfolio");
    //     portfolio.createElement('p');
        
    // };




//typewriter function
const typeWriter = () => {
    const phrases = [
    "a front-end web developer.",
    "a lifelong learner.",
    "an asset to your team."
    ];

    const typewriter = document.getElementById("typewriter");
    const speed = 70; 
    const deleteSpeed = 50; 
    const delayAfterTyping = 1300; 
    const delayAfterDeleting = 200; 
    let currentPhraseIndex = 0;
    let index = 0;

    const type = () => {
    const text = phrases[currentPhraseIndex];
    if (index < text.length) {
        typewriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
        } else {
            setTimeout(deleteText, delayAfterTyping);
        }
    };

    const deleteText = () => {
        const text = phrases[currentPhraseIndex];
        let j = text.length;
        const deleteInterval = setInterval(() => {
            const currentText = typewriter.innerHTML;
            typewriter.innerHTML = currentText.slice(0, j);
            j--;
            if (j < 0) {
            clearInterval(deleteInterval);
            setTimeout(nextPhrase, delayAfterDeleting);
        }
    }, deleteSpeed);
    };

    const nextPhrase = () => {
        currentPhraseIndex++;
        if (currentPhraseIndex === phrases.length) {
        currentPhraseIndex = 0;
    }
    index = 0;
    typewriter.innerHTML = "";

    type();
    };

    type();
};

  // Start the typewriter animation on page load
window.onload = () => {
    typeWriter();
};


