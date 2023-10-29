const sectionList = document.querySelectorAll("section");
const newArticle = document.createElement("article");
const newParagraph = document.createElement("p");
const newImg = document.createElement("img");
const newH3 = document.createElement("h3");
const newSidebar = document.createElement("aside");
const newSpan = document.createElement("span");
const newParagraphTwo = document.createElement("p");

sectionList[0].classList.add("featured");



newImg.src = "./images/paul-gilmore-unsplash.jpg";
newImg.alt = "Image of a mountain in front of a lake.";

newArticle.append(newImg);


newH3.innerText = "Stop Planning";

newArticle.append(newH3);


newParagraph.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

newArticle.append(newParagraph);


newArticle.append(newSidebar);


newSidebar.append(newParagraphTwo);


newParagraphTwo.append(newSpan);

const strong = document.createElement("strong");

newSpan.append(strong);

strong.innerText = "Read Time";

newSpan.innerText = "4 Minutes";

const newAnchor = document.createElement("a");

newAnchor.href = "#";

newAnchor.innerText = "Read more...";

newParagraphTwo.append(newAnchor);

const postSection = document.querySelector(".posts");

postSection.append(newArticle);

const allPosts = postSection.querySelectorAll("article");

allPosts[0].before(allPosts[1]);

const firstLink = document.querySelector("a");

firstLink.remove();

newSpan.remove();

newArticle.remove();


for(let i = 0; i < allPosts.length; i++){
    let header = allPosts[i].querySelector("h3");
    header.remove();    
};






