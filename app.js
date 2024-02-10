document.addEventListener("DOMContentLoaded", function () {
  const feedContainer = document.querySelector(".right-main");
  const textArea = document.getElementById("text-area");
  const postButton = document.getElementById("post_button");
  const textCount = document.getElementById("text_count");
  
  let feedArr = JSON.parse(localStorage.getItem("feed")) || [];

  function displayComments() {
    feedContainer.innerHTML = ""; 
    feedArr.forEach((comment, index) => {
      const divElem = createDiv(comment, index);
      feedContainer.insertAdjacentHTML("beforeend", divElem);
    });
  }

  function createDiv(commentText, index) {
    return `
      <div class="interact" data-index="${index}">
        <div class="component">
          <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
          <div class="user">
            <div class="user-1">
              <p class="username">Shravanth</p>
              <div class="edit">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" class="delete-icon delete-css">
              </div>
            </div>
            <textarea class="Feed-input" readonly>${commentText}</textarea>
            <div class="interact-icons">
              <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
              <img onclick="toggle(event)" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" class="like-icon">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function deleteComment(index) {
    feedArr.splice(index, 1); 
    localStorage.setItem("feed", JSON.stringify(feedArr)); 
    displayComments();
  }

  feedContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-icon")) {
      const index = parseInt(e.target.closest('.interact').getAttribute("data-index"));
      deleteComment(index);
    }
  });

  displayComments();

  textArea.addEventListener("input", (e) => {
    const length = e.target.value.length;
    textCount.textContent = `${length}/100`;
  });

  postButton.addEventListener("click", () => {
    const commentText = textArea.value.trim();
    if (commentText) {
      feedArr.push(commentText);
      localStorage.setItem("feed", JSON.stringify(feedArr));
      displayComments();
      textArea.value = ""; 
    }
  });
});
function toggle(event) {
  if(event.target.src == "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" )
  {
    event.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
  }else{
    event.target.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
  }
}
