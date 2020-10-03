document.addEventListener("userDataReady", function(e) {
    const data = JSON.parse(e.detail.jsonText);
    console.log(data);

    for ( var object of data) {
        // clone the data of the given template
        const clone = document.getElementById("user-card-template").content.cloneNode(true);

        // change the image/ avata attributions
        clone.querySelector('img').setAttribute("src" , object.avatar);
        clone.querySelector("img").setAttribute("alt" , object.firstName + " " + object.lastName);

        // Set the user information
        clone.querySelector("h1").innerText = object.firstName + " " + object.lastName;

        clone.querySelector('p.email').innerText = object.email;

        clone.querySelector('p.phone > span').innerText = object.phoneNumber;

        const address_ = clone.querySelectorAll('div.address > p');
        address_[0].innerText = object.address.streetAddress;
        address_[1].innerText = object.address.zipCode;
        address_[2].innerText = object.address.country;

        // Add the link to user's social meadi homepage
        clone.querySelector('p.homepage').setAttribute("href", object.homepage);

        // Append the info the to contact div
        document.getElementById("contacts").appendChild(clone);

    }
});

fetchUserData();