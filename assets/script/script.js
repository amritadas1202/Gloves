const size9 = document.querySelector(".size9");
const size10 = document.querySelector(".size10");
const tip3 = document.querySelector(".tip3");
const tip4 = document.querySelector(".tip4");
const split1 = document.querySelector(".split1");
const split2 = document.querySelector(".split2");

size9.classList.add("success");
tip3.classList.add("success");
split1.classList.add("col_suc");

size9.addEventListener("click", function () {
  size9.classList.add("success");
  size10.classList.remove("success");
});
size10.addEventListener("click", function () {
  size10.classList.add("success");
  size9.classList.remove("success");
});
tip3.addEventListener("click", function () {
  tip3.classList.add("success");
  tip4.classList.remove("success");
});
tip4.addEventListener("click", function () {
  tip4.classList.add("success");
  tip3.classList.remove("success");
});
split1.addEventListener("click", function () {
  split1.classList.add("col_suc");
  split2.classList.remove("col_suc");
});
split2.addEventListener("click", function () {
  split2.classList.add("col_suc");
  split1.classList.remove("col_suc");
});

// $("#zoom").elevateZoom();
