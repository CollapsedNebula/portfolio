import { useEffect } from "react";
import Cube from "../components/Cube";
import "../css/LandingPage.css";

function LandingPage() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const value = "KIM YOON HO";
    const subtitleValue = "Designing Developer";
    let interval: number;
    let subtitleInterval: number;

    useEffect(() => {
        // Title 애니메이션
        let interaction = 0;
        let reveal = 0;
        const shuffleCount = 3;

        clearInterval(interval);
        interval = setInterval(() => {
            const title = document.querySelector("#title") as HTMLElement;
            const width = title?.offsetWidth || 0;

            if (title) {
                title.style.width = `${width}px`;
                title.innerText = value
                    .split("")
                    .map((letter, index) => {
                        if (letter === " ") return " ";
                        if (index < reveal) return letter;
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                interaction++;
                if (interaction % shuffleCount === 0) {
                    reveal++;
                }

                if (reveal > value.length) {
                    clearInterval(interval);
                    title.innerText = value;
                }
            }
        }, 40);

        // Subtitle 애니메이션
        let subInteraction = 0;
        let subReveal = 0;
        const subShuffleCount = 3;

        clearInterval(subtitleInterval);
        subtitleInterval = setInterval(() => {
            const subtitle = document.querySelector("#subtitle") as HTMLElement;
            const width = subtitle?.offsetWidth || 0;

            if (subtitle) {
                subtitle.style.width = `${width}px`;
                subtitle.innerText = subtitleValue
                    .split("")
                    .map((letter, index) => {
                        if (letter === " ") return " ";
                        if (index < subReveal) return letter;
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                subInteraction++;
                if (subInteraction % subShuffleCount === 0) {
                    subReveal++;
                }

                if (subReveal > subtitleValue.length) {
                    clearInterval(subtitleInterval);
                    subtitle.innerText = subtitleValue;
                }
            }
        }, 40);

        return () => {
            clearInterval(interval);
            clearInterval(subtitleInterval);
        };
    }, []);

    return (
        <>
            <div id="flex-container">
                <div id="flex-title">
                    <div id="title">KIM YOON HO</div>
                    <div id="subtitle">Designing Developer</div>
                </div>
                <Cube />
            </div>
        </>
    );
}

export default LandingPage;
