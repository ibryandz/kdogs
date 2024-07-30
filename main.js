// Using querySelector to get the first element with the class 'book__now'




// BOOK NOW BUTTON 

const bookNowElement = document.querySelector(".book__now");

bookNowElement.addEventListener("click", () => {
    // Hide the button after clicking
    bookNowElement.style.display = "none";

    // Scroll to the #bookings section smoothly
    document.querySelector("#bookings").scrollIntoView({ behavior: "smooth" });
});

//********************************************** */
// FAQS
const faqP = document.querySelectorAll(".faq__p")
const faqElement = document.querySelectorAll(".faq");
faqElement.forEach((elem, i) => {
    elem.addEventListener("click", () => {
        if (faqP[i].style.display === "block") {
            faqP[i].style.display = "none";
        } else {
            faqP[i].style.display = "block";
        }
    });
});

const serviceCard = document.getElementsByClassName("srv__card_cont");
console.log(serviceCard);

document.addEventListener("scroll", () => {
    const heroContElement = document.querySelector(".hero__cont");
    const scrollY = window.scrollY;
    heroContElement.style.transform = `translateY(-${scrollY * 1}px)`;
});

document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".tsti__card, .srv__card_cont, .p__cont, .team__card, .faq");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
            } else {
                entry.target.classList.remove("animate-in");
            }
        });
    }, {
        threshold: 0.5 // Adjust this value as needed
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // For the button with ID rover__btn
    const roverBtn = document.getElementById("rover__btn");
    roverBtn.addEventListener("click", () => {
        window.location.href = "https://www.rover.com/members/kimberly-r-kim/?service_type=overnight-boarding&frequency=onetime&pet_type=dog";
    });

    // For the element with class ani
    const aniElement = document.querySelector(".ani");
    aniElement.addEventListener("click", () => {
        window.location.href = "https://www.rover.com/members/aniuska-vanessa-r-i-take-care-of-dogs-with-love/?service_type=overnight-boarding&frequency=onetime&pet_type=dog"; // Replace with the desired URL
    });
});
