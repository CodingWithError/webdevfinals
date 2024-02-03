const dataOfLocalStorage = localStorage.getItem("feed");
const feed_arr = JSON.parse(dataOfLocalStorage);

function basicContent(feed) {
  if (feed) {
    feed_arr.forEach((element) => {
      //   console.log(element);
      const div_elem = createDiv(element);
      document.querySelector(".right-main").innerHTML += div_elem;
    });
  } else {
    localStorage.setItem("feed", JSON.stringify([]));
  }
}

function createDiv(text) {
  const div = `
            <div class="interact">
                <div class="components">
                    <img class="p-img" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739">
                    <div class="user">
                <div class="user-1">
                <p class="username">Shravanth</p>
                <div class="edit">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643">
                </div>
            </div>
                <textarea class="Feed-input" placeholder="Type"></textarea>
                <div class="interact-icons">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619">
                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679">
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</main>
        `;
  return div;
}

document.addEventListener("DOMContentLoaded", function () {
  basicContent(dataOfLocalStorage);

  const text = document.getElementById("text-area");
  text.addEventListener("input", (e) => {
    var length = e.target.value.length;
    document.getElementById("text_count").innerHTML = ${length}/100;
  });

  const post_button = document.getElementById("post_button");

  post_button.addEventListener("click", (e) => {
    const text_of_post = text.value;
    text.value = "";
    feed_arr.push(text_of_post);
    localStorage.setItem("feed", JSON.stringify(feed_arr));
    const div_elem = createDiv(text_of_post);
    document.querySelector(".right-main").innerHTML += div_elem;
  });
});