 ////////////////////////////////////////////

 let counter = 0;

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

////////////////////////////////////////////

function test(){
  let newdiv  = document.createElement('div' + counter);
  newdiv.className+='card';

  let newdiv2 = document.createElement('div');
  newdiv2.className+='container'; 

  let newh = document.createElement('h4');
  let newb = document.createElement('b');
  newb.innerHTML = "Yannick";
  let newp = document.createElement('p');
  newp.innerHTML = "Archtiect & Engineer";



  newh.appendChild(newb);
  newdiv2.appendChild(newh);
  newdiv2.appendChild(newp);
  newdiv.appendChild(newdiv2);

  document.getElementById("test").appendChild(newdiv);
 
  counter += 1 ;

  console.log(counter);

}

function remove(){
  if(document.getElementById("tester").checked == true){
    counter =+ 1;
  }
  console.log(counter);
}



