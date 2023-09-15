import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Home } from "./components/Home";
import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.render(
  <StrictMode>
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>
          <App />
        </Authenticated>
        <Unauthenticated>
          <Home />
        </Unauthenticated>
        <AuthLoading>
          <p>Loading...</p>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </StrictMode>,
  document.getElementById("root")
);