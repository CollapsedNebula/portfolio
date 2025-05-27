import React from "react";
import "../css/Header.css";

function Header() {
    const buttons = ["Main", "About", "Projects"];

    return (
        <>
            <div id="div-header">
                <div id="div-header-title">Portfolio</div>
                <div></div>
                <div id="div-header-buttons" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>/</span>
                    {buttons.map((label, idx) => (
                        <React.Fragment key={idx}>
                            <button>{label}</button>
                            <span>/</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Header;
