import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => this.props.history.push('/'));
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.processForm({
            username: 'NewUser2',
            password: 'password'
        })
        const { history } = this.props;
        history.push('/signup');
    }

    render() {
        const loginError = this.props.errors;
        return (
            <div className="login">
                <div className="signup-Header">
                    <Link to="/"><img id="signup-logo" src={"SpotifyBlack.png"} alt="logo"></img></Link>
                </div>
                <div className="content-login-1">
                    <h2 className="login-h2">To continue, log in to Spotify.</h2>
                    <button id="login-fb">Log in with facebook</button>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <br />
                        <strong className="line-thru">OR</strong>
                            <br />
                            <label>
                                <input type="text"
                                    value={ this.state.username }
                                    onChange={ this.update('username') }
                                    className={ loginError ? "input-register-error" : "input-register-2" }
                                    placeholder="Username"
                                />
                            </label>
                            <br />
                            <label>
                                <input type="password"
                                    value={ this.state.password }
                                    onChange={ this.update('password') }
                                    className={ loginError ? "input-register-error" : "input-register-2" }
                                    placeholder="Password"
                                />
                            {loginError ? <div className="input-error">{loginError}</div> : <div style={{ display: "none" }}>{null}</div>}
                            </label>
                            <br /><br />
                            <input className="login-submit" type="submit" value="Log In" />
                            <div className="forgot-password-prompt"><a id="login-highlight" href="">Forgot your password?</a></div>
                        </form>
                        <br />
                    <button type="submit" className="demo-submit" onClick={ this.handleDemoUser }>Demo User</button>
                    <span id="no-account-q">Don't have an account?</span>
                    <button type="submit" className="signup-button" onClick={ this.handleDemoUser }>Sign Up For Spotify</button>
                </div>
                    
             </div>
            // TODO: Demo User!
            
            
        );
    }
}

export default withRouter(LoginForm);
