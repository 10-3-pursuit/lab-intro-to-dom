// created a variable to house the part of the document we want to go into and edit 
const firstSection = document.querySelector("section");
//added a class attribute to the first section and named the class "Featured"
firstSection.setAttribute( 
    "class", 
    "Featured"
);

// ********************************* NEW ARTICLE ***********************************
// created article element 
const newArticle = document.createElement("article");
// created image element 
const image1 = document.createElement("img");
// set image attributes
image1.setAttribute(
    "src",
    "./images/paul-gilmore-unsplash.jpg",
    "alt",
    "Image of a mountain in front of a lake."
);
// add image to NewArticle
newArticle.append(image1);
// created heading (h3)
const header1 = document.createElement("h3");
// set article attributes
header1.innerText = "Stop Planning";
// add header to NewArticle
newArticle.append(header1);
// create a paragraph for article by assigning it a variable to store data
const paragraph1 = document.createElement("p");
// added text to paragraph
paragraph1.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
// add paragrpah to article 
newArticle.append(paragraph1);
// created aside element
const aside1 = document.createElement("aside");
// created second paragraph element 
const paragraph2 = document.createElement("p");
//created span element
const span1 = document.createElement("span");
// added elements inside of span 
span1.innerHTML = `<span><strong>Read Time:</strong> 4 Minutes</span
>`;
const anchor1 = document.createElement("a");
anchor1.innerHTML = `<a href="#">Read more...</a>`
span1.append(anchor1);
paragraph2.append(span1);
aside1.append(paragraph2);
newArticle.append(aside1);
// add new article to posts section 
document.querySelector(".posts").append(newArticle); 

// ************************* SWITCHING POSTS SECTION *********************************
//I struggled to wrap my head around doing this in a more dynamic way so I used chatgpt as resource

// Step 1: Select the section.posts element
const postsSection = document.querySelector('section.posts');

// Step 2: Get references to the first and second articles
const firstArticle = postsSection.querySelector('article:nth-child(1)');
const secondArticle = postsSection.querySelector('article:nth-child(2)');

if (firstArticle && secondArticle) {
  // Step 3: Swap the positions of the articles
  postsSection.insertBefore(secondArticle, firstArticle);
}


// ********************* REMOVING ELEMENTS
// created a variable to navigate to header link 
const headerLink = document.querySelector("header nav a")
headerLink.remove(); 


//created a variable to get to the span element we want 
const spanWithReadElement = document.querySelector("span")





