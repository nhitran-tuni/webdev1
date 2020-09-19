const name = document.getElementById("input-name").value;
const email = document.getElementById("input-email").value;
const homepage = document.getElementById("input-homepage").value;

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const clone = document.getElementById("contact-template").content.cloneNode(true);

    clone.querySelector("h2").innerHTML = name;
    clone.querySelector("p").innerHTML = email;

    var newHomepage = clone.querySelector("a");
    newHomepage.setAttribute("href", homepage);
    newHomepage.innerHTML = homepage;

    document.getElementById("contacts").appendChild(clone);
    document.getElementById("form").reset(); 
    console.log('a');
})