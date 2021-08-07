import { useState } from "react";

const Home = ({ SignupForm, LoginForm }) => {
  const [isNew, setIsNew] = useState(false);
  return (
    <section className="home">
      <h1>Welcome!</h1>
      {isNew ? (
        <div>
          <LoginForm />
          <p>
            New to Dungons and Drageons?{" "}
            <a onClick={() => setIsNew(false)}>Register</a>
          </p>
        </div>
      ) : (
        <div>
          <SignupForm />
          <p>
            Already have an account?{" "}
            <a onClick={() => setIsNew(true)}>Log In</a>
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;
