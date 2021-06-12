function myFunction() {
  document.getElementById("add_message").innerHTML =
    '<div class="dropdown">\n' +
    " <button></button>\n" +
    '<div class="options">\n' +
    '<input id="radio-africa" type="radio" name="region" value="africa" checked />\n' +
    ' <label style="--index: 1" for="radio-africa">Project 1</label>\n' +
    '<input id="radio-asia" type="radio" name="region" value="asia"/>\n' +
    '<label style="--index: 2; background-color: #fafafa" class="asiaa" for="radio-asia">Project 2</label>\n' +
    ' <input id="radio-australia" type="radio" name="region" value="australia"/>\n' +
    '<label style="--index: 3; background-color: #fafafa" for="radio-australia" >Project 3</label>\n' +
    '<input id="radio-europe" type="radio" name="region" value="europe" />\n' +
    '<label style="--index: 4; background-color: #fafafa" for="radio-europe">Project 4</label>\n' +
    '<input id="radio-europe" type="radio" name="region" value="europe" />\n' +
    '<label style="--index: 5; background-color: #fafafa" for="radio-europe">Project 5</label>\n' +
    '<input id="radio-europe" type="radio" name="region" value="europe" />\n' +
    '<label style="--index: 6; background-color: #fafafa" for="radio-europe">Project 6</label>\n' +
    "</div>" +
    ' <svg xmlns="http://www.w3.org/2000/svg" width="16.341" height="12" viewBox="0 0 16.341 12"><defs><style>.a {fill: #3971b1;}</style></defs><path class="a" d="M8.077,12,16.341,0H0Z" /></svg>\n' +
    "</div>";
}

// for popup
function openForm() {
  document.getElementById("mobile-popup-box").style.display = "block";
  document.getElementById("mobile-footer").style.display = "none";
  document.getElementById("mobile-wrapper").style.display = "none";
  document.querySelector(".map-bg").style.display = "none";
  document.querySelector(".navbar-wrapper").style.display = "none";
}
