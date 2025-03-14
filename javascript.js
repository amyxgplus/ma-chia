function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleNoClick() {
    window.location.href = "jump_page.html";
}


document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    positionNoButton(); // Ensure it starts at the right place

    document.addEventListener("mousemove", (event) => {
        const noRect = noButton.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Check if the mouse is near the button
        const distanceX = Math.abs(mouseX - (noRect.left + noRect.width / 2));
        const distanceY = Math.abs(mouseY - (noRect.top + noRect.height / 2));

        if (distanceX < noRect.width / 2 + 5 && distanceY < noRect.height / 2 + 5) {
            moveNoButton();
        }
    });

    // Move the button instantly when hovered (prevents clicking)
    noButton.addEventListener("mouseenter", moveNoButton);

    function positionNoButton() {
        const yesRect = yesButton.getBoundingClientRect();
        noButton.style.position = "absolute";
        noButton.style.left = `${yesRect.right + 20}px`;
        noButton.style.top = `${yesRect.top}px`;
    }

    function moveNoButton() {
        noButton.style.pointerEvents = "none"; // Disable clicks while moving

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const padding = 20; // Keeps button inside the screen

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        // Ensure the button stays within bounds
        randomX = Math.max(padding, Math.min(randomX, maxX));
        randomY = Math.max(padding, Math.min(randomY, maxY));

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;

        // Re-enable pointer events after the move
        setTimeout(() => {
            noButton.style.pointerEvents = "auto";
        }, 200);
    }
});
