import { SignInButton } from "@clerk/clerk-react";

export const Home = (): JSX.Element => {
  return (
    <main className="home">
      <section className="upper-section">
        <nav>
          <div className="text-wrapper">
            <span>Home</span>
            <span>Rules</span>
            <span>About Us</span>
          </div>
          <SignInButton>
            <button>Sign In</button>
          </SignInButton>
        </nav>
        <div className="label">
            <div className="find-the-imposter">
              <span className="find-the">
                Find The
                <br />
                Imposter
              </span>               
              <SignInButton>
                <button>Get Started</button>
              </SignInButton>
            </div>
        </div>
      </section>

      <section className="upper-middle-section">
        <span>Don't know how to play?</span>
      </section>

      <section className="lower-middle-section">
        <span>RULES</span>
        <div className="rules">
          <ul>
            <li>Do not spam the chat.</li>
            <li>Do not use multiple usernames.</li>
            <li>Type in normal english.</li>
            <li>Do not share personal information about yourself or others.</li>
            <li>Do not personally attack or harass anyone in the chatroom.</li>
            <li>Keep conversations on topic and relevant to the chat room.</li>
            <li>Do not use any slurs or offensive language.</li>
            <li>And lastly, remember there's a human behind the chat. Be kind.</li>
          </ul>
        </div>
      </section>

    </main>
  );
};
