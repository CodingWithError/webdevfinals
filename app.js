document.addEventListener("DOMContentLoaded", function () {
  const feedContainer = document.querySelector(".right-main");
  const textArea = document.getElementById("text-area");
  const postButton = document.getElementById("post_button");
  const textCount = document.getElementById("text_count");
  
  let feedArr = JSON.parse(localStorage.getItem("feed")) || [];

  // Function to display existing comments
  function displayComments() {
    feedContainer.innerHTML = ""; // Clear existing comments
    feedArr.forEach((comment) => {
      const divElem = createDiv(comment);
      feedContainer.insertAdjacentHTML("beforeend", divElem);
    });
  }

  // Function to create HTML structure for a comment
  function createDiv(commentText) {
    return `
      <div class="interact">
        <div class="component">
          <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
          <div class="user">
            <div class="user-1">
              <p class="username">Shravanth</p>
              <div class="edit">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
              </div>
            </div>
            <textarea class="Feed-input" readonly>${commentText}</textarea>
            <div class="interact-icons">
              <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
              <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Display existing comments on page load
  displayComments();

  // Event listener for character count in textarea
  textArea.addEventListener("input", (e) => {
    const length = e.target.value.length;
    textCount.textContent = `${length}/100`;
  });

  // Event listener for posting a new comment
  postButton.addEventListener("click", () => {
    const commentText = textArea.value.trim();
    if (commentText) {
      feedArr.push(commentText);
      localStorage.setItem("feed", JSON.stringify(feedArr));
      displayComments();
      textArea.value = ""; // Clear textarea after posting
    }
  });
});
