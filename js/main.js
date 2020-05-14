 /* Javascript */

/*
1. Add job
  a. Open form with 2 fields
    i. Company name
    .. Job title
Note: Click submit, should add job to wishlist. Save jobs to localstorage

bonus - pop up modal with 'Add a job', 2 fields, and Continue button

2. Job List View
  a. See scrollable list of jobs

3. Delete jobs
  a. Should be able to Delete
  bonus - on hover, trash button appears on top right. Fade in.
  bonus - on mouseOver, trash button turns white
  bonus - on click, modal appears with 'Delete Job', 'Are you sure you want to delete this job?'', and Delete and Cancel buttons (cancel is semi-transparent)
  */

      // list.innerHTML += '<li>' + '<button>' + item.value + '</button>' + '</li>';

(function(){

  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + '<button>' + item.value + '</button>' + '</li>';
    store();
    item.value = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li><button>Placeholder</button></li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();
