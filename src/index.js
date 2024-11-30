import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import i18next from "./i18n";
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </StrictMode>
  </BrowserRouter>
);

reportWebVitals();
