import InfoBox from "../components/InfoBox";
import "../css/AboutPage.css";

function AboutPage() {
    return (
        <>
            <div id="about-container">
                <h1>About me</h1>
                <section>
                    <p>코딩하면서 꾸미는 것 좋아합니다.</p>
                </section>
                <section>
                    <h2>기술</h2>
                    <InfoBox title="React" content="2.5★" icon="../../public/React.svg" />
                    <InfoBox title="Tailwind CSS" content="2.5★" icon="../../public/TailwindCSS.svg" />
                    <InfoBox title="Typescript / Javascript" content="2.2★" icon="../../public/TypeScript.svg" />
                    <InfoBox title="HTML5" content="2.5★" icon="../../public/HTML5.svg" />
                    <InfoBox title="CSS3" content="3.0★" icon="../../public/CSS3.svg" />
                    <InfoBox title="MySQL" content="2.0★" icon="../../public/MySQL.svg" />
                    <InfoBox title="Git / Github" content="2.0★" icon="../../public/git.svg" />
                </section>
            </div>
        </>
    );
}

export default AboutPage;
