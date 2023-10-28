const sectionOne = document.querySelector('section');
sectionOne.classList.add('featured');

const article = document.createElement('article');
const image = document.createElement('img');
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg");
image.setAttribute("alt", "Image of a mountain in front of a lake.");
article.append(image);
const headerThree = document.createElement('h3');
headerThree.innerText = "Stop Planning";
article.append(headerThree);
const paragraph = document.createElement('p');
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
article.append(paragraph);
const aside = document.createElement('aside');
const asideP = document.createElement('p');
const span = document.createElement('span');
span.innerHTML = "<strong>Read Time:</strong> 4 Minutes";
asideP.append(span);
const link = document.createElement('a');
link.setAttribute('href', '#');
link.textContent = 'Read more...';
asideP.append(link);
aside.append(asideP);
article.append(aside);
const postsClass = document.querySelector('.posts');
postsClass.append(article)


const allPostArticles = document.querySelectorAll('.posts article');
const firstPostArticle = allPostArticles[0];
const secondPostArticle = allPostArticles[1];
postsClass.insertBefore(secondPostArticle, firstPostArticle)


const allPostsParent = document.querySelector('header ul')
const allPostsLink = document.querySelector('header li');
allPostsParent.removeChild(allPostsLink);


const firstSpanParent = document.querySelector('aside p');
const firstSpan = document.querySelector('span');
firstSpanParent.removeChild(firstSpan)
console.log(firstSpanParent)
// asideP.removeChild(span)


