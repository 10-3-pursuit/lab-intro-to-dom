const firstSection = document.querySelector("section");
firstSection.classList.add("featured");


const article = document.createElement("article");
const image = document.createElement("img");
image.setAttribute("src","./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt", "Image of a mountain in front of a lake")
article.append(image);

const h3 = document.createElement("h3");
h3.innerText = "Stop Planning"
article.append(h3);

const paragraph = document.createElement("p");
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`
article.append(paragraph);

const aside = document.createElement("aside");
article.append(aside);

const asideP = document.createElement("asideP");
const span = document.createElement("span");
span.innerHTML = `<span><strong>Read Time:</strong> 4 minutes</span>`;
asideP.append(span);

const readPlus = document.createElement("readPlus");
readPlus.setAttribute("href","#");
readPlus.textContent = "Read More..."
asideP.append(readPlus);

const postSection = document.querySelector("section.posts");
const article1 = document.querySelector("section.posts articles");
postSection.append(article1);

const headerLink = document.querySelector('header nav a');
headerLink.remove();

const featuredSpan = document.querySelector("aside p");
const spanElement = document.querySelector("span");
featuredSpan.removeChild(spanElement);

const nonFeaturedP = document.querySelector("ul");
const allPost = document.querySelector("li");
nonFeaturedP.removeChild(allPost);
