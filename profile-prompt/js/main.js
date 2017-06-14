function genBio() {
    var prompts = document.querySelector("form");
    var bio = "";
    for (var i = 0; i < prompts.length; i++) {
        bio += prompts.elements[i].value;
    }
    console.log(bio);
    document.querySelector("textarea").innerHTML = bio;
}
