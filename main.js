const section = document.querySelector("section");
section.classList.add("featured");

// create an article element
const article = document.createElement("article");

// create an img element
const image = document.createElement("img");
// add src to image
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
// add alt to image
image.setAttribute("alt", "Image of a mountain in front of a lake.")

// create an h3 element
const h3 = document.createElement("h3");
h3.innerText = "Stop Planning"

// create a p element
const paragraph1 = document.createElement("p");
// add text to the p element
paragraph1.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`

const aside = document.createElement("aside");

const paragraph2 = document.createElement("p");

// create a strong element
const strong = document.createElement("strong");
strong.innerText = "Read Time:"

// create a span element
const span = document.createElement("span");
span.innerText = " 4 Minutes";

// prepend strong element to span element
span.prepend(strong);

// append span to p2 element
paragraph2.append(span);

// create an anchor tag
const aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.innerText = "Read more..."

// append aTag to p2 element
paragraph2.append(aTag);

// append p2 element to aside element
aside.append(paragraph2);

// append image element to article
article.append(image);
// append h3, paragraph1 and aside elements to article element
article.append(h3);
article.append(paragraph1);
article.append(aside);

const sectionPosts = document.querySelector("section.posts");
sectionPosts.append(article);

// Get the first article from inside the section.posts element
const articleOne = document.querySelector("section.posts article");
// remove the first article
articleOne.remove();

// Get the first article from inside the section.posts element
const articleTwo = document.querySelector("section.posts article");
articleTwo.remove();

const articleThree = document.querySelector("section.posts article");
articleThree.remove();

sectionPosts.append(articleTwo);
sectionPosts.append(articleOne);

const allPostsObj = document.querySelector("header li");
allPostsObj.remove();
// console.log(allPostsObj);