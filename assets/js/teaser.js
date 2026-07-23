document.addEventListener("DOMContentLoaded", () => {

    const teaser = document.querySelector(".teaser");

    if (!teaser) return;

    const timeElement = teaser.querySelector(".teaser-datetime");
    const countdown = teaser.querySelector(".teaser-countdown");

    if (!timeElement || !countdown) return;

    const start = new Date(timeElement.dateTime);

    // délka akce v hodinách
    const durationHours = 5;

    const end = new Date(start);
    end.setHours(end.getHours() + durationHours);

    const now = new Date();

});
