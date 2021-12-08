import { Outlet, Link } from "react-router-dom"
import React from 'react';

export default function App() {
  return (
    <div className="app">
      <h1>Bookkeeper!</h1>
      <nav
        style = {{
          borderBottom: "solid 1px",
          padding: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      { <Outlet /> }
    </div>
  );
}
