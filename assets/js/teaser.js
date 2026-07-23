document.addEventListener("DOMContentLoaded", () => {

    const teaser = document.querySelector(".teaser");

    if (!teaser) return;

    const timeElement = teaser.querySelector(".teaser-datetime");
    const countdown = teaser.querySelector(".teaser-countdown");

    if (!timeElement || !countdown) return;

    const start = new Date(timeElement.dateTime);

    // délka akce v hodinách
    const durationHours =
    Number(timeElement.dataset.duration) || 0;

    const end = new Date(start);
    end.setHours(end.getHours() + durationHours);

    const now = new Date();

    if (now >= end) {

        teaser.style.display = "none";

        return;

    }

    if (now >= start) {

        countdown.textContent = "Právě probíhá";

        return;

    }

    const today = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const eventDay = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate()
    );

    const days =
        Math.round((eventDay - today) / 86400000);

    if (days === 0) {

        countdown.textContent =
            `Dnes od ${start.toLocaleTimeString("cs-CZ", {
                hour: "2-digit",
                minute: "2-digit"
            })}`;

    }
    else if (days === 1) {

        countdown.textContent =
            "Zbývá 1 den";

    }
    else {

        countdown.textContent =
            `Zbývá ${days} dní`;

    }

});
