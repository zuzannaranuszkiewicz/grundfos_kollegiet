// FAQ 
var acc = document.getElementsByClassName("faq");
var i;
var len = acc.length;
// everytime a "faq" is clicked, toggle the hidden content (put biggger height to see the content)
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = 0;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
