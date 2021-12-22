import "../sign-in/sign-in.styles.scss";

import FormInput from "../input-box/customInput.component";
import CustomBtn from "../custom-btn/customBtn.component";

const SignUp = () => {
  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.isDataValid(this.state)) {
      const { displayName, email, password, confirmPassword } = this.state;
      this.props.setCurrentUsre({
        displayName: displayName.toLowerCase(),
        email,
        password,
        confirmPassword,
      });
    }
  };

  isDataValid = ({ password, confirmPassword }) => {
    if (password.trim().length < 8)
      return alert("Minmum length for password is 8 characters");
    if (password.trim() !== confirmPassword.trim())
      return alert("Two passwords do not match");

    return true;
  };

  return (
    <div className="sign-up">
      <h2>I don't have an acount</h2>
      <span>setup with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          name="displayName"
          value={this.state.displayName}
          handleChange={this.handelChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={this.state.email}
          handleChange={this.handelChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={this.state.password}
          handleChange={this.handelChange}
          required
        />
        <FormInput
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          handleChange={this.handelChange}
          required
        />
        <CustomBtn type="submit">Sign up</CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;
