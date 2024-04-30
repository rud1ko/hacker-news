import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AdaptivityProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";
import {RouterProvider} from "@vkontakte/vk-mini-apps-router";
import {browserRouter} from "./app/router/browser-router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider appearance={"light"}>
      <AdaptivityProvider>
          <AppRoot>
              <RouterProvider router={browserRouter}>
                  <App />
              </RouterProvider>
          </AppRoot>
      </AdaptivityProvider>
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
