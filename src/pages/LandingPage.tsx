import Cube from "../components/Cube";
import "../css/LandingPage.css";

function LandingPage() {
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
