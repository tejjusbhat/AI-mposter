import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./components/LoginPage";
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
          <LoginPage />
        </Unauthenticated>
        <AuthLoading>
          <p>Loading...</p>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  </StrictMode>,
  document.getElementById("root")
);