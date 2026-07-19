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

        document.querySelectorAll(".lightbox").forEach(element => {

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

}
