// Add a class of "featured" to the first section element
// Make a querySelector in order to to add Feature.
const section = document.querySelector("section")
section.classList.add("featured");
//*

// Use create Element to make Article.
const article = document.createElement("article");
//*

// Create a image element.
// Set Attribute and copy and paste both links.
// Append last after create and set.
const image = document.createElement("img");
image.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
image.setAttribute("alt", "Image of a mountain in front of a lake.")
article.append(image);
//*

// Create h3
// Copy "Stop Planning" and add to innerText
// Append last after copy.
const headerThree = document.createElement("h3");
headerThree.innerText = "Stop Planning"
article.append(headerThree);
//*

// Create a p element
// Copy and paste Paragraph into innerText
// Append last.
const paragraph = document.createElement("p");
paragraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`
article.append (paragraph);
//*


// Create aside element
// Create asideparagraph element
// Copy and paste span and paste into innerhtml
// Append the asideparagraph first.
const aside = document.createElement("aside");
const asideParagraph = document.createElement("p");
const span = document.createElement('span');
span.innerHTML = `<span><strong>Read Time:</strong> 4 Minutes</span>`;
asideParagraph.append(span);
//*

// Create a Element for the Read more
const start = document.createElement('RM')
start.setAttribute('href', '#')
start.textContent = 'Read more...';
//*


// Append the start,asideParagraph and aside.
article.append(aside);
asideParagraph.append(start);
aside.append(asideParagraph);
//*

// Add the article to the end of section.posts
// Use querySelector to select section.posts.
// Append everything to article.
const postsSection = document.querySelector('section.posts');
const firstArticle = document.querySelector('section.posts articles');
postsSection.append(firstArticle);
//*

// Remove All Posts Link
// 'a' means anchor element inside the 'nav' within the 'header' and removes it.
// .Remove will remove it.
const headerLink = document.querySelector('header nav a');
headerLink.remove();

// Remove the span element from the featured post
const featuredSpan = document.querySelector('aside p');
const spanElement = document.querySelector('span');
featuredSpan.removeChild(spanElement);
//*

// Remove all titles from non-featured posts
const nonFeaturedPosts = document.querySelectorAll('ul');
const allPosts = document.querySelector('li');
nonFeaturedPosts.removeChild(allPosts);
//*











