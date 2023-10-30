// Get the <section> element and add the 'featured' class to it
const section = document.querySelector('section')
section.classList.add('featured')

// Create a new <article> element
const newArticle = document.createElement('article')

// Create an <img> element and set its attributes
const newImage = document.createElement('img')
newImage.setAttribute("src", "./images/paul-gilmore-unsplash.jpg")
newImage.setAttribute("alt", "Image of a mountain in front of a lake.");
newArticle.append(newImage)

// Create a new <h3> element and set its text
const newHeaderThree = document.createElement('h3')
newHeaderThree.innerText = "Stop Planning"
newArticle.append(newHeaderThree)

// Create a new <p> element and set its text
const newParagraph = document.createElement('p')
newParagraph.innerText = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`;
newArticle.append(newParagraph)

// Create a new <aside> element
const newAside = document.createElement('aside')

// Create a <p> element inside the <aside>
const asideParagraph = document.createElement('p')

// Create a <span> element and set its content
const spanOne = document.createElement('span')
spanOne.innerHTML = "<strong>Read Time:</strong> 4 Minutes"
asideParagraph.append(spanOne)

// Create an <a> element and set its attributes and text
const readMoreLink = document.createElement('a')
readMoreLink.setAttribute('href', '#')
readMoreLink.textContent = 'Read more...'
asideParagraph.append(readMoreLink)

// Append the <p> element to the <aside>
newAside.append(asideParagraph)

// Append the <aside> to the <article>
newArticle.append(newAside)

// Get the container for posts and append the new <article> to it
const postsContainer = document.querySelector('.posts')
postsContainer.append(newArticle)

// Get all <article> elements inside the .posts container
const articlesInPost = document.querySelectorAll('.posts article')

// Get the first and second <article> elements
const postArticleOne = articlesInPost[0]
const postArticleTwo = articlesInPost[1]

// Move the second <article> before the first one in the .posts container
postsContainer.prepend(postArticleOne)
postsContainer.prepend(postArticleTwo)

// Get the parent of 'All Posts' link and remove the link from the nav
const allPostsParent = document.querySelector('header ul')
const allPostsLink = document.querySelector('li')
allPostsParent.removeChild(allPostsLink)

// Get the parent of the first <span> in <aside> and remove the <span>
const firstSpanParent = document.querySelector('aside p')
const firstSpan = document.querySelector('span')
firstSpanParent.removeChild(firstSpan)

// Remove the third <article> from the .posts container
articlesInPost[2].remove()

// Get all non-featured <h3> elements and remove them
const nonFeaturedTitles = document.querySelectorAll('h3')
nonFeaturedTitles.forEach(title => title.innerText = '')
console.log(nonFeaturedTitles)