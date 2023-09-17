import { SignInButton } from "@clerk/clerk-react";
import chatapp from "../assets/chat-app-logo.png";

export const Home = (): JSX.Element => {
  return (
    <main className="home">
      <section className="upper-section" id="home">
        <nav>
          <div className="text-wrapper">
            <span><a href="#home">Home</a></span>
            <span><a href="#rules">Rules</a></span>
            <span><a href="#about-us">About Us</a></span>
          </div>
          <SignInButton>
            <button>Sign In</button>
          </SignInButton>
        </nav>
        <div className="label">
            <div className="find-the-imposter">
              <span className="find-the">
                Convex
                <br />
                Chat App
              </span>               
              <SignInButton>
                <button>Get Started</button>
              </SignInButton>
            </div>
            <div className="logo">
              <img src={chatapp} alt="imposter" />
            </div>
        </div>
      </section>

      <section className="middle-section" id="rules">
        <div className="separation-line">
          <div>yo</div>
          <div>no u</div>
        </div>
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

      <section className="lower-section" id="about-us">
        <span>ABOUT US</span>
        <div className="about-us">
          <div>
            Privacy Policy
            <br />
            Terms and Conditions
            <br />
            Help
            <br />
            FAQ
            <br />
            Services
          </div>
          <div>
            We made this project for the WebDevCody hackathon and to learn convex.
            This is just a simple chatroom app for now but we plan to include AI as one of the chatroom members.
            The game will then be to find the AI imposter.
            We plan to add a lot more features to it too!
          </div>
          <div>
            Contact Us 
            <br />
            Mail
            <br />
            Follow Us On
          </div>
        </div>
      </section>

    </main>
  );
};
