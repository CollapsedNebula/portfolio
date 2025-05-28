import { useRef, useEffect } from "react";
import "../css/Cube.css";

function Cube() {
    const cubeRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();

    useEffect(() => {
        let rotateX = 0;
        let rotateY = 0;

        const animate = () => {
            rotateX += 0.5;
            rotateY += 2;
            if (cubeRef.current) {
                cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div id="flex-cube">
            <div id="cube" ref={cubeRef}>
                <div id="face-front">ㅇ-ㅇ</div>
                <div id="face-back"></div>
                <div id="face-left"></div>
                <div id="face-right"></div>
                <div id="face-top"></div>
                <div id="face-bottom"></div>
            </div>
        </div>
    );
}

export default Cube;