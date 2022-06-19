// Question 1

const cat = {

    complain: function () {
        console.log("Meow!");
    }


}
    .pet.complain();



// Question 2

const heading = document.querySelector("h3")
heading.innerHTML = "updated heading";

// Question 3
heading.style.fontSize = "2em";



// Question 4

heading.classList.heading.add("subheading");


// question 5

const paragraphs = document.querySelectorAll("p")
for (let i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}


// question 6


const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = '<p>New paragraph</p>';


