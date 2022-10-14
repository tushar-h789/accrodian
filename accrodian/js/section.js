var acc = document.querySelectorAll(".accordion");

let arr = Array.from(acc);

arr.map((item) => {
  console.log(item);

  item.addEventListener("click", function () {
    // console.log(item.classList.toggle("tushar"));
    let panel = item.nextElementSibling;

    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
