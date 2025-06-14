import "../css/InfoBox.css";

interface InfoBoxProps {
    title: string;
    content: string;
    icon?: string;
}

function InfoBox({ icon, title, content }: InfoBoxProps) {
    return (
        <div id="info-box">
            <div id="info-boxbox">
                {icon && <img src={icon} alt={title} id="info-icon" />}
                <h3 id="info-title">{title}</h3>
                <p id="info-content">{content}</p>
            </div>
        </div>
    );
}

export default InfoBox;
