console.log("Hello!"); // test to see if shows up in DOM

function generateArticle () { // fx creates template of article tags
    const article = document.createElement("article");; // create variable for article tag by grabbing it from html code
    article.classList.add("posts"); // class name for article that we want is posts
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
      document.querySelector(".posts").append(article); // append mountain img to article
    
    return article;
};
generateArticle();