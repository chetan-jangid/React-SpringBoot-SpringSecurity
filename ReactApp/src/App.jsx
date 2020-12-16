import './App.css';
import axiosConfig from './AxiosService';
import { React, Component } from 'react';

class App extends Component {
  state = {
    username: "",
    password: ""
  };

  formSubmit = (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const endpoint = "http://localhost:8080/authenticate";
    const body = {
      username: username,
      password: password
    };

    axiosConfig().post(endpoint, body).then(res => {
      console.log(res);
      localStorage.setItem("authorization", res.data.jwtToken);
      axiosConfig().get("http://localhost:8080/dashboard").then(response => {
        console.log(response);
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input type="text" placeholder="Username" id="username" />
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default App;
