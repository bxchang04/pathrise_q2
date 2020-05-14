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

To-dos:
1. + onClick make modal pop up
  a. Add 2 input fields - Company Name and Job title
  Styling - add icons, and nactive
  b. Continue button

2. Continue onClick, add button and

*/

      // list.innerHTML += '<li>' + '<button>' + item.value + '</button>' + '</li>';

// For adding entries
(function(){

  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#plus');
      item2 = document.querySelector('#plus'); // refactor this

  form.addEventListener('submit',function(e){
    e.preventDefault();
    // refactor to use modal as input
    item.value = "";
    item2.value = "";
    list.innerHTML += `<li>
    <entry> <div>${item.value} </div><div> ${item2.value}</div></entry>
    </li>`;
    item.value = "company";
    item2.value = "job";
    store();
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
      list.innerHTML = `<li><entry><div>Pathrise</div><div>Software Engineer</div></entry></li>
      <li><entry><div>Google</div><div>Software Engineer</div></entry></li>
      <li><entry><div>Facebook</div><div>Software Engineer</div></entry></li>
      <li><entry><div>Airbnb</div><div>Software Engineer</div></entry></li>`;
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();


// For modal
var isDialogSupported = true;
if (!window.HTMLDialogElement) {
  document.body.classList.add("no-dialog");
  isDialogSupported = false;
}

plus.onclick = () => {
  if (isDialogSupported) {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
  //   Focus first input when dialog opens
  modal.querySelector("input").focus();
};
