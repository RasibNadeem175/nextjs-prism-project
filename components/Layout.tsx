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
    <div className="search-nav">
    <SearchBar placeholder="Enter a string" data ={BookData} />
    </div>
 
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        margin:0;
        background: lightgreen;
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      .search-nav {
        display: flex;
        align-items: flex-start;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        background: rgba(0, 0, 0, 0.05);
      }

      input,
      textarea {
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
