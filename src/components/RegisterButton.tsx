import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  const registerAndRedirect = () => {
    loginWithRedirect({
      appState: { targetUrl: "/account" },
    });
  };

  return (
    <div>
      <Button variant="primary" className="mx-2" onClick={registerAndRedirect}>
        Register
      </Button>
    </div>
  );
};

export default RegisterButton;