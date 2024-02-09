import type { AuthProvider } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { firebaseAuth } from "../../firebase/firebaseConfig";
import { useUserStore } from "../../hooks";
import toast from "react-hot-toast";
import { ButtonWrapper, Container, TextWrapper, Wrapper } from "./Style";

export default function SignIn() {
  const { currentUser } = useUserStore();

  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: AuthProvider) => {
    setLoading(true);

    signInWithPopup(firebaseAuth, provider)
      .then(() => {
        console.log("Signed In! ✅");
      })
      .catch(() => {
        toast.error(`Something went wrong`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <Container>
      <img
        src="/home.png"
        alt="A picture of a avatar man."
      />
      <Wrapper>
        <TextWrapper>
          <h1>ChatHub</h1>

          <h2>
            The best place for messaging It's free, fast and secure. We make it
            easy and fun to stay close to your favourite people.
          </h2>
        </TextWrapper>

        <ButtonWrapper>
          <button
            disabled={loading}
            onClick={() => handleSignIn(new GoogleAuthProvider())}
          >
            Sign In With Google
          </button>

          <a href="https://github.com/EUG96ene" target="_blank">
            Built & Designed by Eugene
          </a>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
