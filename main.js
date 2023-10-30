
// Add a class of "featured" to the first section element on the page.
document.querySelector('section').className = "featured";

// Create the following article element with JavaScript and add at the end of the section.posts element.
const article = document.createElement('article');

const mountain = document.createElement('img');
mountain.setAttribute('src', './images/paul-gilmore-unsplash.jpg');
mountain.setAttribute('alt', 'Image of a mountain in front of a lake.');
article.append(mountain);

const stopPlanning = document.createElement('h3');
stopPlanning.innerText = "Stop Planning";
article.append(stopPlanning);

const stopPlanningParagraph = document.createElement('p');
stopPlanningParagraph.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
article.append(stopPlanningParagraph);

const aside = document.createElement('aside');
const p = document.createElement('p');
const span = document.createElement('span');
const readTime = document.createElement('strong');
readTime.innerText = "Read Time:"
span.innerText = " 4 minutes"
span.prepend(readTime);
p.append(span);
const readMore = document.createElement('a');
readMore.setAttribute('href', "#");
readMore.innerText = "Read more...";
p.append(readMore)
aside.append(p);

article.append(aside);
document.querySelector('.posts').append(article);

// Move the first article from inside the section.posts element to become the second article and move the second article so that it is the first article.
let article1 = document.querySelectorAll("article")[1];
let article2 = document.querySelectorAll("article")[2];
article2.style.order = 1;
article1.style.order = 2;
article.style.order = 3;

// Remove the "All Posts" link from the header.
document.querySelector("header li").remove();

// Remove the span element that contains the "Read Time" in the featured post. The featured post is the first post on the page.
document.querySelector("main span").remove();

// Remove the last post from the page, titled "Stop Planning".
posts = document.querySelectorAll('.posts article');
posts[posts.length -1].remove();

// Remove all titles from all non-featured posts.
posts.forEach((post)=> document.querySelector('h3').remove())

