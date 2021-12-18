import React from "react";
import "./sign-in.styles.scss";
import CustomInput from "../input-box/customInput.component";
import CustomBtn from "../custom-btn/customBtn.component";
import { connect } from "react-redux";
import { signInUser } from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const res = localStorage.getItem("user");
    if (!res) return alert("invalid user or password");
    const user = JSON.parse(res);

    if (
      user.email !== this.state.email ||
      user.password !== this.state.password
    )
      return alert("incorrect email or password");

    this.props.signIn_user(user);
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <CustomInput
            name="email"
            label="Email"
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <CustomInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <CustomBtn type="submit">Sign in</CustomBtn>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn_user: (user) => {
    dispatch(signInUser(user));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
