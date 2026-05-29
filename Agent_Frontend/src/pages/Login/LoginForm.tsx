import React from "react";


export default function LoginForm(): React.JSX.Element {
    return (
        <div className="li-card">

            <div className="li-card-header li-flex li-flex-col li-items-center">
                <h1 className="li-h2">
                    Login Into Your Account
                </h1>
                <p className="li-text-lg li-text-muted">Enter your credentials</p>
            </div>

            <form>
                <div className="li-input-group">
                    <label className="li-label li-h4">FULL NAME</label>
                    <input type="text" className="li-input li-mb-lg" placeholder="John Doe" required/>
                </div>

                <div className="li-input-group">
                    <label className="li-label li-h4">EMAIL ADDRESS</label>
                    <input type="email" className="li-input li-mb-lg" placeholder="your@gmail.com" required/>
                </div>

                <div className="li-input-group">
                    <label className="li-label li-h4">PASSWORD</label>
                    <input type="password" className="li-input li-mb-lg" placeholder="password" minLength={8} required/>
                </div>

                <div className="li-flex li-flex-col li-mt-lg">
                    <button type="submit" className="li-btn li-btn-primary li-btn-lg li-w-full">Continue with Email...</button>
                    <button type="submit" className="li-btn li-btn-secondary li-btn-lg li-w-full">Sign In as Guest</button>
                </div>

            </form>
        </div>
    )
}