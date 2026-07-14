const wheel = document.getElementById("wheel");
const btn = document.getElementById("spinBtn");

btn.onclick = () => {

    let players = document
        .getElementById("players")
        .value
        .split("\n")
        .map(x => x.trim())
        .filter(x => x !== "");

    if (players.length < 2) {
        alert("Nhập ít nhất 2 người!");
        return;
    }

    btn.disabled = true;

    let deg = 360 * 8 + Math.random() * 360;

    wheel.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => {

        players = players.sort(() => Math.random() - 0.5);

        let france = [];
        let spain = [];

        players.forEach((p, i) => {

            if (i % 2 === 0)
                france.push(p);
            else
                spain.push(p);

        });

        document.getElementById("team1").innerHTML =
            france.map(x => `<li>${x}</li>`).join("");

        document.getElementById("team2").innerHTML =
            spain.map(x => `<li>${x}</li>`).join("");

        btn.disabled = false;

        celebrate();

    }, 5000);

}

function celebrate() {

    document.body.animate(
        [
            { background: "#111" },
            { background: "#004d40" },
            { background: "#111" }
        ],
        {
            duration: 1000,
            iterations: 3
        }
    );

}
