import Cube from "../components/Cube";
import "../css/LandingPage.css";

function LandingPage() {
    return (
        <>
            <div id="flex-container">
                <div id="flex-title">
                    <div id="title">포트폴리오</div>
                    <div id="subtitle">
                        프론트엔드 개발자 <span id="bold">김윤호</span>
                    </div>
                </div>
                <Cube />
            </div>
        </>
    );
}

export default LandingPage;
