// Adding an event listener for when the web page loads
window.addEventListener("load", (event) => {
    // An array of paths to the necessary image files for the Minecraft wool textures
    let woolImages = 
    [
        "textures/wool_colored_black.png",
        "textures/wool_colored_blue.png",
        "textures/wool_colored_brown.png",
        "textures/wool_colored_cyan.png",
        "textures/wool_colored_gray.png",
        "textures/wool_colored_green.png",
        "textures/wool_colored_light_blue.png",
        "textures/wool_colored_lime.png",
        "textures/wool_colored_magenta.png",
        "textures/wool_colored_orange.png",
        "textures/wool_colored_pink.png",
        "textures/wool_colored_purple.png",
        "textures/wool_colored_red.png",
        "textures/wool_colored_silver.png",
        "textures/wool_colored_white.png",
        "textures/wool_colored_yellow.png"
    ];

    // Getting all the elements on the page with a class attribute with the value of "wool"
    let woolTextures = document.getElementsByClassName('wool');

    // Initializing a counter variable
    let counter = 0;

    // Creating a timer that executes every 1.5 seconds
    let timer = setInterval(() => {
        // if the counter variable is less than the amount of elements in the woolImages array - 1 then set the counter to 0.
        if(counter > (woolImages.length - 1)) {
            counter = 0;
        }

        /*
            Converting the HTMLCollectionOf<Element> that is returned by the getElementsByClassName() method to an array.
            Then, loop through all the array's elements and use parallel arrays to set the src attribute of the images.
            Ex: if index = 0, so will counter, so, it will set the src attribute to whatever is at index 0 of the woolImages array
        */
        Array.from(woolTextures).forEach((element, index, array) => {
            woolTextures[index].src = woolImages[counter];
        });

        // Increment the counter variable by one.
        counter++;
    }, 1500);  
});