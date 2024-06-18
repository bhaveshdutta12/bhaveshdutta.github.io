/* js/typing.js */
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typing-effect");
    const texts = [
        "a Hacker",
        "a Malware Analyst",
        "into Digital Forensics",
        "a Bug Bounty Hunter",
        "a Cybersecurity Researcher"
    ];
    const typingSpeed = 80; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const delayBetweenTexts = 1500; // Delay between different texts
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenTexts);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }

    type();
});
