    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import "./index.css";
    import { BrowserRouter } from "react-router-dom"; // 👈 Bunu ekle

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
    <React.StrictMode>
        <BrowserRouter> {/* 👈 Router sarmalayıcı */}
        <App />
        </BrowserRouter>
    </React.StrictMode>
    );
