import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/signup.component";

import "./contactPage.styles.scss";

const ContactPage = () => (
  <div className="contact-page">
    <SignIn />
    <SignUp />
  </div>
);

export default ContactPage;
