import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            login: { username: "", password: "" }
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChangeUsername = (event) => {
        const login = this.state.login;
        login.username = event.target.value;
        this.setState({ login: login });
    }

    handleChangePassword = (event) => {
        const login = this.state.login;
        login.password = event.target.value;
        this.setState({ login: login });
    }

    handleLogin = (event) => {
        console.log(this.tate);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Authentification</h2>
                <form onSubmit={this.handleLogin}>
                    <div>
                        <span>Pseudo</span>
                        <input type="text"
                            onChange={this.handleChangeUsername}
                            value={this.state.login.username}
                            required />
                    </div>
                    <div>
                        <span>Mot de passe</span>
                        <input type="password"
                            onChange={this.handleChangePassword}
                            value={this.state.login.password}
                            required />
                    </div>
                    <input
                        type="submit"
                        value="Connexion" />
                </form>
            </div>
        );
    }
}

export default LoginPage;