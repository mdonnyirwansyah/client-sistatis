import React from 'react';

function Auth({ children, title }) {
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card">
                    <div className="card-body login-card-body">
                        <h1 className="login-box-msg">
                            <strong>{title}</strong>
                        </h1>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
