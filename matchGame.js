
let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // console.log(true); // to check if click is working
        card.classList.add("clicked");

        if(counter === 0) {
            firstSelection = card.getAttribute("pokemon");
            counter++;
        } else {
            secondSelection = card.getAttribute("pokemon");
            counter = 0;

            if(firstSelection === secondSelection) {
                const correctCards = document.querySelectorAll(
                    ".card[pokemon='" + firstSelection + "']"
                );

                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
            } else {
                const incorrectCards = document.querySelectorAll(".card.clicked");

                incorrectCards[0].classList.add("wrong");
                incorrectCards[1].classList.add("wrong");

                setTimeout(() => {
                    incorrectCards[0].classList.remove("wrong");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("wrong");
                    incorrectCards[1].classList.remove("clicked");
                }, 1000);
            }
        }
        // console.log(firstSelection);
        // console.log(secondSelection);
    });
});

