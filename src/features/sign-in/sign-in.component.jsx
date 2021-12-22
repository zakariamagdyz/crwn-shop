import "./sign-in.styles.scss";

import CustomInput from "../input-box/customInput.component";
import CustomBtn from "../custom-btn/customBtn.component";

const SignIn = () => {
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
  </div>;
};

export default SignIn;
