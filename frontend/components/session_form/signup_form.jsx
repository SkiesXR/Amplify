import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        const usernameError = this.props.errors.username;
        const passwordError = this.props.errors.password;
        const emailError = this.props.errors.email;
        return (
            
            <div className="signup">
                <div className="signup-Header">
                    <img id="signup-logo" src={"SpotifyBlack.png"} alt="logo"></img>
                </div>
                <div className="content">
                    <button id="signup-fb">Sign up with facebook</button>                
                    <form onSubmit={this.handleSubmit} >
                        <br />
                        <strong className="line-thru">or</strong>
                            <h2 className="signup-h2">Sign up with your email address</h2> 
                            <div className="login-form">
                                <br />
                                <label>
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className={usernameError ? "input-register-error" : "input-register-1"}
                                        placeholder="Username"
                                    />
                                {usernameError ? <div className="input-error">Username {usernameError}</div> : <div style={{ display: "none" }}>{null}</div> }
                                </label>
                                <br />
                                <label>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={passwordError ? "input-register-error" : "input-register-1"}
                                        placeholder="Password"
                                    />
                                {passwordError ? <div className="input-error">Password {passwordError}</div> : <div style={{ display: "none" }}>{null}</div>}

                                </label>
                                <br />
                                <label>
                                    <input type="email"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className={emailError ? "input-register-error" : "input-register-1"}
                                        placeholder="Email"
                                    />
                                {emailError ? <div className="input-error">Email {emailError}</div> : <div style={{ display: "none" }}>{null}</div>}

                                </label>
                                <br /><br />
                                <input className="signup-submit" type="submit" value="Sign Up" />
                                <div className="login-prompt">Already have an account? <Link id="login-highlight" to="/login">Log in</Link></div>
                            </div>
                        </form>
                        <br/>
                    </div>
                </div>
            );
        }
    }

export default withRouter(SignupForm);
