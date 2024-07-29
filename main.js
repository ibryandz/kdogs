// Using querySelector to get the first element with the class 'book__now'



// BOOK NOW BUTTON 

const bookNowElement = document.querySelector(".book__now");
bookNowElement.addEventListener("click", () => {
    bookNowElement.style.top = "250px";
    // bookNowElement.style.right = "flex-end";
    bookNowElement.style.placeSelf = "flex-end";
    
    bookNowElement.style.margin = 0
    
    
})

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






