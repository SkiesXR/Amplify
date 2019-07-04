import React from 'react';
import { withRouter } from 'react-router-dom';

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
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup">
                <div className="signup-Header">
                    <img id="signup-logo" src={"SpotifyBlack.png"} alt="logo"></img>
                </div>
                <div className="content">
                    <button id="signup-fb">Sign up with facebook</button>
                </div>
                <div className="content-2-signup">
                    <form onSubmit={this.handleSubmit} >
                        <br />
                        <strong className="line-thru">or</strong>
                            <h2 className="signup-h2">Sign up with your email address</h2>
                            {/* TODO: Style errors properly
                            {this.renderErrors()}  */}   
                            <div className="login-form">
                                <br />
                                <label>
                                    <input type="text"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="input-register-1"
                                        placeholder="Username"
                                    />
                                </label>
                                <br />
                                <label>
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="input-register-1"
                                        placeholder="Password"
                                    />
                                </label>
                                <br />
                                <label>
                                    <input type="email"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        className="input-register-1"
                                        placeholder="Email"
                                    />
                                </label>
                                <br /><br />
                                <input className="signup-submit" type="submit" value="Sign Up" />
                                <div className="login-prompt">Already have an account? <a id="login-highlight" href="">Log in</a></div>
                            </div>
                        </form>
                        <br/>
                    </div>
                </div>
            );
        }
    }

export default withRouter(SignupForm);
