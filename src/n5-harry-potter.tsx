import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Home from "./pages/home/Home";

import global_es from "./public/translations/es.json";
import global_en from "./public/translations/en.json";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.localStorage.getItem("language"),
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
  react: {
    useSuspense: true,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "b"],
  },
});

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <I18nextProvider i18n={i18next}>
      <Home />
    </I18nextProvider>
  ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
