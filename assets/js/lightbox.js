/**
 * --------------------------------------------------------
 * Lightbox
 * --------------------------------------------------------
 * Universal image gallery for Jekyll websites.
 *
 * Author: ChatGPT & Petr
 * Project: TRUT
 * --------------------------------------------------------
 */

class Lightbox {

    constructor() {

        this.overlay = document.getElementById("lightbox");

        if (!this.overlay) {
            return;
        }

        this.image = this.overlay.querySelector(".lightbox-image");

        this.counter = this.overlay.querySelector(".lightbox-counter");

        this.closeButton = this.overlay.querySelector(".lightbox-close");

        this.prevButton = this.overlay.querySelector(".lightbox-prev");

        this.nextButton = this.overlay.querySelector(".lightbox-next");

        this.spinner = this.overlay.querySelector(".lightbox-spinner");



        this.images = [];

        this.folder = "";

        this.index = 0;

        this.loop = true;

        this.touchStartX = 0;

        this.touchEndX = 0;



        this.bindTriggers();

        this.bindButtons();

        this.bindKeyboard();

        this.bindTouch();

    }



    /**
     * ---------------------------------------------
     * Bind gallery triggers
     * ---------------------------------------------
     */

    bindTriggers() {

        document.querySelectorAll("[data-images]").forEach(element => {

            element.addEventListener("click", event => {

                event.preventDefault();

                this.open(element);

            });

        });

    }



    /**
     * ---------------------------------------------
     * Open gallery
     * ---------------------------------------------
     */

    open(element) {

        this.folder = element.dataset.folder || "";

        this.loop = element.dataset.loop !== "false";



        this.images = element.dataset.images
            .split(",")
            .map(item => item.trim())
            .filter(item => item.length > 0);



        if (!this.images.length) {
            return;
        }



        this.index = 0;



        this.overlay.classList.add("open");

        this.overlay.setAttribute("aria-hidden", "false");



        document.body.style.overflow = "hidden";



        this.show();

    }



    /**
     * ---------------------------------------------
     * Close gallery
     * ---------------------------------------------
     */

    close() {

        this.overlay.classList.remove("open");

        this.overlay.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        this.image.src = "";

        this.image.alt = "";

    }



    /**
     * ---------------------------------------------
     * Build image path
     * ---------------------------------------------
     */

    imagePath(filename) {

        if (

            filename.startsWith("/") ||

            filename.startsWith("http://") ||

            filename.startsWith("https://")

        ) {

            return filename;

        }



        if (!this.folder) {
            return filename;
        }



        return `${this.folder}/${filename}`;

    }



    /**
     * ---------------------------------------------
     * Show current image
     * ---------------------------------------------
     */

    show() {

        this.spinner.classList.add("visible");

        const src = this.imagePath(this.images[this.index]);

        const img = new Image();

        img.onload = () => {

            this.image.src = src;

            this.image.alt = "";

            this.spinner.classList.remove("visible");

            this.updateCounter();

            this.updateButtons();

            this.preload();

        };

        img.src = src;

    }



    /**
     * ---------------------------------------------
     * Previous image
     * ---------------------------------------------
     */

    previous() {

        if (this.index > 0) {

            this.index--;

        }

        else if (this.loop) {

            this.index = this.images.length - 1;

        }

        else {

            return;

        }

        this.show();

    }



    /**
     * ---------------------------------------------
     * Next image
     * ---------------------------------------------
     */

    next() {

        if (this.index < this.images.length - 1) {

            this.index++;

        }

        else if (this.loop) {

            this.index = 0;

        }

        else {

            return;

        }

        this.show();

    }



    /**
     * ---------------------------------------------
     * Update counter
     * ---------------------------------------------
     */

    updateCounter() {

        this.counter.textContent =
            `${this.index + 1} / ${this.images.length}`;

    }



    /**
     * ---------------------------------------------
     * Update navigation buttons
     * ---------------------------------------------
     */

    updateButtons() {

        if (this.loop) {

            this.prevButton.hidden = false;

            this.nextButton.hidden = false;

            return;

        }

        this.prevButton.hidden = (this.index === 0);

        this.nextButton.hidden =

            (this.index === this.images.length - 1);

    }



    /**
     * ---------------------------------------------
     * Preload neighbour images
     * ---------------------------------------------
     */

    preload() {

        if (this.images.length < 2) {

            return;

        }

        const preload = index => {

            const img = new Image();

            img.src = this.imagePath(this.images[index]);

        };



        let prev = this.index - 1;

        let next = this.index + 1;



        if (this.loop) {

            if (prev < 0) {

                prev = this.images.length - 1;

            }

            if (next >= this.images.length) {

                next = 0;

            }

        }



        if (prev >= 0) {

            preload(prev);

        }

        if (next < this.images.length) {

            preload(next);

        }

    }



    /**
     * Buttons
     */

    bindButtons() {

        this.closeButton.addEventListener("click", () => {

            this.close();

        });

        this.prevButton.addEventListener("click", () => {

            this.previous();

        });

        this.nextButton.addEventListener("click", () => {

            this.next();

        });

        this.overlay.addEventListener("click", event => {

            if (event.target === this.overlay) {

                this.close();

            }

        });

    }



    /**
     * Keyboard
     */

    bindKeyboard() {

        document.addEventListener("keydown", event => {

            if (!this.overlay.classList.contains("open")) {

                return;

            }

            switch (event.key) {

                case "Escape":

                    this.close();

                    break;

                case "ArrowLeft":

                    this.previous();

                    break;

                case "ArrowRight":

                    this.next();

                    break;

                case "Home":

                    this.index = 0;

                    this.show();

                    break;

                case "End":

                    this.index = this.images.length - 1;

                    this.show();

                    break;

            }

        });

    }



    /**
     * Touch
     */

    bindTouch() {

        this.overlay.addEventListener("touchstart", event => {

            this.touchStartX = event.changedTouches[0].clientX;

        });

        this.overlay.addEventListener("touchend", event => {

            this.touchEndX = event.changedTouches[0].clientX;

            this.handleSwipe();

        });

    }



    /**
     * Swipe
     */

    handleSwipe() {

        const delta = this.touchEndX - this.touchStartX;

        if (Math.abs(delta) < 50) {

            return;

        }

        if (delta > 0) {

            this.previous();

        }

        else {

            this.next();

        }

    }

}



document.addEventListener("DOMContentLoaded", () => {

    new Lightbox();

});
