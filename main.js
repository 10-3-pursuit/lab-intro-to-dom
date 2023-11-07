// console.log("Hello!"); // test to see if shows up in DOM

// Step 1: adding class "featured" to first section
function addFeatured () {
    const sections = document.querySelectorAll("section"); // makes an array of everything with section tag
    featuredSection = sections[0].classList.add("featured"); // selectsfirst element of array and adds class attribute "featured"
};
addFeatured (); // fx called when page loads with DOM

// Step 2: Creat article element to add after section with class attribute posts
function generateArticle () { // fx creates template of article tags
    const article = document.createElement("article");; // create variable for article tag by grabbing it from html code
    article.classList.add("posts"); // class name for article that we want is posts
    //makes the template
    article.innerHTML = `<img
        src="./images/paul-gilmore-unsplash.jpg"
        alt="Image of a mountain in front of a lake."
      />
      <h3>Stop Planning</h3>
      <p>
        You -- yes you! You're an over-planner, I can tell. It's time to stop
        planning so much and instead focusing on relaxing. Taking a break at all is
        so stressful these days; why add to the stress by overworking yourself?
      </p>
      <aside>
        <p>
          <span><strong>Read Time:</strong> 4 Minutes</span
          ><a href="#">Read more...</a>
        </p>
      </aside>`
      document.querySelector(".posts").append(article); // finds section .posts using queryselector then appends article template after section with class .posts
    return article;
};
generateArticle(); // fx called when page loads with DOM

// function rearrangeArticles() {
//   // first select posts section using
//   const sectionPostsArr = document.querySelectorAll(".posts article"); // the select all but for articles since that's the child
//       const firstArticle = sectionPostsArr[0];
//       const secondArticle = sectionPostsArr[1]; // the second element for article is at index 1
//       sectionPostsArr.insertBefore(secondArticle, firstArticle); // insertBefore is a DOM method that allows you to insert a node (in this case, secondArticle) before a reference node (in this case, articlesArr[0]) within a parent element (in this case, postsSection)
// };
// rearrangeArticles();

function rearrangeArticles() {
  // select the parent element (the section with class "posts").
  const postsSection = document.querySelector(".posts");

  // select the articles within the parent element.
  const articlesArr = postsSection.querySelectorAll("article"); // instead of document write postsSection variable since it's salready selected and stored

  // make sure there are at least two articles to rearrange.
  if (articlesArr.length >= 2) {
    // get the first and second articles querySelectorAll outputs an array so you can use bracket notation
    const firstArticle = articlesArr[0];
    const secondArticle = articlesArr[1];

    // Remove the second article from its current position.
    postsSection.removeChild(secondArticle); // must remove bc insertBefore method moves the element but doesn't remove it from its original position. removeChild instead of remove because postSection is the parent. In this case, you explicitly specify the parent element (parentElement) and the child element (childElement) you want to remove. But if using .remove() you don't need to put stuff in parentheses

    // Insert the second article before the first article.
    postsSection.insertBefore(secondArticle, firstArticle);
  }
}

rearrangeArticles();


// function removeAllPostsLink () {
//   document.querySelector(ul);
// }
// removeAllPostsLink();


function removeThirdArticle() {
    const articles = document.querySelectorAll(".posts article"); //selects and looks through articles under section with class posts (the method acts like an array kinda)
    if (articles.length > 2) { // Check if there is a third article
        const thirdArticle = articles[2]; // querySelectAll puts everything with relevant tags in an arry so u can select elements. In this case I want 3rd element in array
        thirdArticle.remove(); // it's gonna find 3rd article appended (not because of html it got appended bc of JS fx) and remove it
    }
}

removeThirdArticle();
