import React, { ReactNode } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar"
import 'bootstrap/dist/css/bootstrap.min.css'
import BookData from "../data.json"
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <SearchBar placeholder="Enter a string" data ={BookData} />
 
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
        background: lightgreen;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: red;
      }
      input, textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
   </div>
);

export default Layout;
