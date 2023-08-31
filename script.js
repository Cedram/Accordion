const accordingItems = document.querySelectorAll(".according-item");

accordingItems.forEach((item) => {
  const title = item.querySelector(".according-title");
  const content = item.querySelector(".according-content");

  title.addEventListener("click", () => {
    for (let i = 0; i < accordingItems.length; i++) {
      if (accordingItems[i] != item) {
        accordingItems[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});
