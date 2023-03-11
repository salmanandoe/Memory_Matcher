
let i = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");   
// querySelectorAll allows for me to select everything that matches the selector I specify

cards.forEach((card) => {
    card.addEventListener("click", () => {
        // console.log(true); // to check if click is working
        card.classList.add("clicked");

        if(i === 0) {
            firstSelection = card.getAttribute("pokemon");
            i++;
        } else {
            secondSelection = card.getAttribute("pokemon");
            i = 0;

            if(firstSelection === secondSelection) {
                const correctMatch = document.querySelectorAll(
                    ".card[pokemon='" + firstSelection + "']"
                );

                correctMatch[0].classList.add("match");
                correctMatch[0].classList.remove("clicked");
                correctMatch[1].classList.add("match");
                correctMatch[1].classList.remove("clicked");

            } else {
                const incorrectMatch = document.querySelectorAll(".card.clicked");

                incorrectMatch[0].classList.add("wrong");
                incorrectMatch[1].classList.add("wrong");

                setTimeout(() => {
                    incorrectMatch[0].classList.remove("wrong");
                    incorrectMatch[0].classList.remove("clicked");
                    incorrectMatch[1].classList.remove("wrong");
                    incorrectMatch[1].classList.remove("clicked");
                }, 1000);
            }
        }
    });
});

