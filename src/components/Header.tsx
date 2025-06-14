import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";

function Header() {
    const navigate = useNavigate();

    const buttons = [
        { label: "Main", path: "/" },
        { label: "About", path: "/about" },
        { label: "Projects", path: "/projects" },
    ];

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <div id="div-header">
                <div id="div-header-title">
                    <span id="bold">포트폴리오</span>
                </div>
                <div></div>
                <div id="div-header-buttons" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>/</span>
                    {buttons.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <button onClick={() => handleClick(item.path)}>{item.label}</button>
                            <span>/</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Header;
