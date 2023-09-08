

//typewriter function
const typeWriter = () => {
    const phrases = [
    "a front-end web developer.",
    "a lifelong learner.",
    "an asset to your team."
    ];

    const typewriter = document.getElementById("typewriter");
    const cursor = document.querySelector(".cursor");
    const speed = 90; 
    const deleteSpeed = 60; 
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
            cursor.style.display = "inline";
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
            cursor.style.display = "inline";
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
    cursor.style.display = "inline";
    type();
    };
    typewriter.innerHTML = "";
    type();
};

  // Start the typewriter animation on page load
window.onload = () => {
    typeWriter();
};


//Scroll animation 
// document.addEventListener('DOMContentLoaded', function () {
//     const projects = document.querySelectorAll('.project');

//     window.addEventListener('scroll', function () {
//         projects.forEach((project) => {
//             const bounding = project.getBoundingClientRect();
//             if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
//                 project.classList.add('in-view');
//             } 
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    window.addEventListener('scroll', function () {
        projects.forEach((project) => {
            const bounding = project.getBoundingClientRect();
            if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
                project.classList.add('in-view');
                project.style.animation = 'project-appear 0.5s ease forwards'; // Apply the animation
            }
            // } else {
            //     project.classList.remove('in-view');
            //     project.style.animation = 'none'; // Remove the animation when out of view
            // }
        });
    });
});