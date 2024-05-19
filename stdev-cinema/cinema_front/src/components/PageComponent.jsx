import React from "react";

export default function PageComponent({ title, buttons = "", children}){
    return (
        <>
            <header>
                <div className="adver-block">
                    <div className="header-block">
                        {title}
                    </div>
                </div>

            </header>
            <main>
                {children}
            </main>
        </>
    )
}