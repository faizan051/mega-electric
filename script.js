// active navbar

let nav = document.querySelector('.navigation-wrap')
window.onscroll = function()
{
    if(document.documentElement.scrollTop > 20)
    {
        nav.classList.add("scroll");
    }
    else
    {
        nav.classList.remove("scroll") 
    }
}

let navBar =  document.querySelectorAll('.nav-link')
let navcolllapse =  document.querySelector('.navbar-collapse.collapse')

navBar.forEach(function(a)
{
    a.addEventListener("click", function(){
        navcolllapse.classList.remove("show");
    })
})


function validate()
{
  var mail =  document.getElementById('#sub').value;
  var rmb = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.).([a-z]+).([a-z])?$/;

  if(rmb.sub(mail))
  {
    alert('Your Form Sucessfully submited our team will connect you shortly');
    return true;

  }

  else
    {
      alert('your email is not valid');
      return false;
    }
}

function message()
{
  alert("your Order Submitted Sucessfully")
}





















