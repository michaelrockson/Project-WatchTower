import React from "react";


export default function LoginForm(): React.JSX.Element {
    return (
        <div className="li-card">

            <div className="li-card-header li-flex li-flex-col li-items-center">
                <h1 className="li-h2">
                    Sign Into Your Account
                </h1>
                <p className="li-text-lg li-text-muted">Enter your credentials to sign in</p>
            </div>

            <form>

                <div className="li-input-group">
                    <label className="li-label li-h4">EMAIL ADDRESS</label>
                    <input type="email" className="li-input li-mb-lg" placeholder="your@gmail.com" required/>
                </div>

                <div className="li-input-group">
                    <label className="li-label li-h4">PASSWORD</label>
                    <input type="password" className="li-input li-mb-lg" placeholder="password" minLength={8} required/>
                </div>

                <div className="li-flex2 li-mb-xl li-gap-sm">
                    <input type="checkbox"/>
                    <h5 className="li-text-muted">Remember me for 30 days</h5>
                </div>

                <div className="li-flex li-flex-col li-mt-lg">
                    <button type="submit" className="li-btn li-btn-primary li-btn-lg li-w-full">Sign In</button>

                    <div className="divider-md"></div>

                    <button type="submit" className="li-btn li-btn-secondary li-btn-lg li-w-full">Sign In as Guest
                    </button>
                    <button type="submit" className="li-btn li-btn-secondary li-btn-lg li-w-full">Continue with Google
                    </button>
                </div>

                <div className="li-text-center li-mt-lg">
                    <a className="li-text-sm li-text-muted" href="">Forgot Password?</a>
                </div>

            </form>
        </div>
    )
}