// Grab the first section element
const firstSection = document.querySelector("section");
// Add the class of featured
firstSection.classList.add("featured");




// PART TWO!!!

// Create the article element
const article = document.createElement("article");

// Create the img element
const image = document.createElement("img");

// Adding attributes to image
image.src = "./images/paul-gilmore-unsplash.jpg"

image.alt = "Image of a mountain in front of a lake.";

// Append image to article
article.append(image);

// Create header three
const headerThree = document.createElement("h3");

// Add text to headerThree
headerThree.innerText = "Stop Planning";

// Append headerThree to article
article.append(headerThree);

// Create p element
const paragraph = document.createElement("p");

// Add text to p
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`

// append p to article
article.append(paragraph);





// create aside element
const aside = document.createElement("aside");

// create paragraph
const paragraphTwo = document.createElement("p");

const span = document.createElement("span");

span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";

//append span to p
paragraphTwo.append(span);

// Create link
const link = document.createElement("link");
link.innerHTML = `<a href = "#">Read more...</a>`;

paragraphTwo.append(link);


// Append to aside
aside.append(paragraphTwo);


// append aside to article

article.append(aside);


// Access the section.posts by query
const sectionPosts = document.querySelector("section.posts");

// Append to end of section.posts
sectionPosts.append(article);