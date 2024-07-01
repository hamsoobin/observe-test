'use client'

import {Provider} from "react-redux";
import {Inter} from "next/font/google";
import "./globals.css";
import store from "@/lib/store";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
      <html lang="en">
      <Provider store={store}>
          <title>관찰력 테스트</title>
          <body className={inter.className}>
          <div className="fn-title-section">
              <img src="./assets/images/banding_text.png" className="fn-title-banding"/>
              <div className="fn-title-line"></div>
              <header className="fn-title">관찰력 테스트</header>
              <div className="fn-title-line"></div>
          </div>
          {children}
          </body>
      </Provider>
      </html>
  );
}