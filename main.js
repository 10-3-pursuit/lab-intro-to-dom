
const section = document.querySelector("section")
section.classList.add("featured")

const article = document.createElement("article")


 document.querySelector(".posts").appendChild(article);

article.classList.add("art3");

const image = document.createElement("img");
image.setAttribute("src","./images/paul-gilmore-unsplash.jpg");
image.alt = "Image of a mountain in front of a lake";

document.querySelector(".art3").append(image);

const h3 = document.createElement("h3");
h3.innerText = "Stop Planning"

document.querySelector(".art3").append(h3);

const p = document.createElement("p");
p.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
p.classList.add('postsParagraph')

document.querySelector(".art3").append(p);

const aside = document.createElement("aside");
document.querySelector(".art3").append(aside);
aside.classList.add("asideSection");

const asideParagraph = document.createElement("p");
asideParagraph.classList.add("asideP");

document.querySelector(".asideSection").append(asideParagraph);

const span = document.createElement("span");
document.querySelector(".asideP").append(span);
span.classList.add("spanElement")

span.innerText = "4 Minutes";

const strong = document.createElement("strong");
strong.innerText = "Read Time: ";
document.querySelector(".spanElement").prepend(strong);

const link = document.createElement('a')
link.setAttribute("href", "#");
link.innerText = "Read more...";

document.querySelector(".asideP").append(link);

 const postSection = document.querySelector(".posts");
 const firstArticle = postSection.querySelector("article");
 const secondArticle = firstArticle.nextElementSibling;

 postSection.insertBefore(secondArticle, firstArticle);

 document.querySelectorAll("li") [0].remove();

 document.querySelectorAll("span") [0].remove();

 document.querySelector(".art3").remove()

document.querySelectorAll("h3").remove()



 















  









