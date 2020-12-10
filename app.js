class ImageLoop {
    constructor() {
        this.images = document.querySelectorAll('.gift-image-bg');
        this.clicked = document.querySelectorAll('.clicked');
        this.imgWrappers = document.querySelectorAll('.wrapper');
        this.trigger = document.querySelectorAll('.gift-image-bg');
        this.container = document.getElementById('#content');
        this.target = 'https://github.com/Miralem91/ASDA-html-v5/blob/main/winner.html';
        this.click = 0;
    }


    openPage() {
        this.click++;
        if (this.click % 2 == 0) {
            // console.log('newPage added!');
        } else if (this.click = 1) {
            this.classList.add('clicked');
            this.classList.remove('gift-image-bg');
        }
        console.log(this.click);
    }

    clickOnWrapper() {
        this.click++;
        console.log(this.click);
        if (this.click == 2) {
            function trigger() {
                imageLoop.container = $('#content');
                imageLoop.target ='winner';
                console.log(imageLoop.target);
                imageLoop.container.load('https://github.com/Miralem91/ASDA-html-v5/blob/main/winner.html');
                //Load content
                //stop normal link behaviour
                return false;
            };

            trigger();
        } else {
            console.log('page-not-loaded');
        }
    };

}





const imageLoop = new ImageLoop();

imageLoop.images.forEach(image => {
    image.addEventListener("click", imageLoop.openPage);
    image.addEventListener("click", imageLoop.trigger);
});


imageLoop.imgWrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {
        imageLoop.clickOnWrapper();

    });
});
