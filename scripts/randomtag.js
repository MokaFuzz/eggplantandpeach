(function () {
    var Tags = [
        "For when you've swipped to the bottom of tinder.",
        "For single, childless people.",
        "When all else fails.",
        "We don't know what you're looking for either.",
        "You know ;)"
    ];
    var randomTag = Tags[Math.floor(Math.random() * Tags.length)];
    document.getElementById("tagline").innerHTML = randomTag;
})();
