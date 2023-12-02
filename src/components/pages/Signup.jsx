import Illustration from "../Illustration";
import SignupFrom from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration />
        <SignupFrom />
      </div>
    </>
  );
}
