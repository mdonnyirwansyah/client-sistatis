import React from "react";
import { Header, Sidebar } from "../../../components";

function Error({ children, title }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>{title}</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="error-page">
            <h2 className="headline text-warning">{title}</h2>
            <div className="error-content">{children}</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Error;
