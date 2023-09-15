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
                <h1>
                    Find The
                    Imposter
                </h1>
            </div>
        </div>
      </section>
    </main>
  );
};
