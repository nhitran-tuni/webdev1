document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    const clone = document.getElementById("contact-template").content.cloneNode(true);

    clone.querySelector("h2").innerHTML = document.getElementById("input-name").value;
    clone.querySelector("p").innerHTML = document.getElementById("input-email").value;

    const newHomepage = clone.querySelector("a");
    const homepage = document.getElementById("input-homepage").value;
    newHomepage.setAttribute("href", homepage);
    newHomepage.innerHTML = homepage;

    document.getElementById("contacts").appendChild(clone);
    document.getElementById("form").reset(); 
})