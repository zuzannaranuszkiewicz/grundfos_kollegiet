// changing the content with buttons 
const names = document.querySelector('.names');
const information = document.querySelector('.descriptions');
const content = document.querySelectorAll('.contenti');

names.addEventListener('click', function(e){
  // the target event property returns the element that triggered the event
    const id = e.target.dataset.id;
    if(id){
        // if a button is clicked, give him an active class (and display the hidden content)
        names.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        content.forEach(function(article){
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// the idea was to be able to toggle the menu for the responsive desing of this page
const container = document.querySelector(".container-fluid");
const faq = document.querySelector(".faq");
const panel = document.querySelector(".panel");

faq.addEventListener('click', function(){
	panel.classList.toggle(".hide");
});







  