//Question 1
//use .querySelector() to access the element we want to add a class to
//Use .setAttribute() the 1st arg is the change and the 2nd arg is the value of the change
const section = document.querySelector("main section");
section.setAttribute("class", "featured");

//Question 2
//Access the section.posts element from the HTML
const newPost = document.querySelector("section.posts");

//create an element for the article
let newArticle = document.createElement("article");

//append the newArticle to the newPost
newPost.append(newArticle);

//create a image tag
const imageTag = document.createElement("img");

imageTag.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
imageTag.setAttribute("alt", "Image of a mountain in front of a lake.");

newArticle.append(imageTag);

//create h3 tag
let h3Tag = document.createElement("h3");
h3Tag.textContent = "Stop Planning";
newArticle.append(h3Tag);

//create p Tag
let pTag = document.createElement("p");
pTag.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
      planning so much and instead focusing on relaxing. Taking a break at all
      is so stressful these days; why add to the stress by overworking yourself?`;
newArticle.append(pTag);

//create aside Tag
let asideTag = document.createElement("aside");
newArticle.append(asideTag);

//create a new p Tag
let pTag2 = document.createElement("p");
asideTag.prepend(pTag2);

//create a span Tag
let spanTag = document.createElement("span");
spanTag.textContent = " 4 Minutes";
pTag2.append(spanTag);

//create a strong tag
let strongTag = document.createElement("strong");
strongTag.textContent = "Read Time:";
spanTag.prepend(strongTag);

//create an a Tag
let aTag = document.createElement("a");
aTag.setAttribute("href", "#");
aTag.textContent = "Read more...";
pTag2.append(aTag);

//Question 3
let articles = document.querySelectorAll("section.posts article");
console.log(articles);
let firstArticle = articles[0];
articles[1].after(firstArticle);

//Question 4
let removedLink = document.querySelector("header nav ul li");
removedLink.remove();

// Question 5
let removedSpan = document.querySelector(".featured span");
removedSpan.remove();

// Question 6
let removedPost = document.querySelectorAll("main .posts article");
removedPost[2].remove();
//removedPost[removedPost.length-1].remove();

let noPostTitle = document.querySelectorAll("main .posts h3");
//document.querySelectorAll() returns an array
console.log(noPostTitle); //returns an array
//loop through the returned array to remove the titles from each element of that array
noPostTitle.forEach((element) => element.remove());
/*for (let title of titles) {
title.remove();
}*/
