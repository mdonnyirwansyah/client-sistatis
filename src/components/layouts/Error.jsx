import React from 'react';
import { Header, Sidebar } from '../../components';

function Error({ children, title }) {
    return (
        <>
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
                        <div className="error-content">{children}</div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Error;
