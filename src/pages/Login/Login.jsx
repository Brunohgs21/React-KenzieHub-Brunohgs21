import FormLogin from "../../components/FormLogin";
import { Container } from "../../components/RegisterHeader";
import Div from "./index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("Token");

    if (token) {
      navigate("/dashboard", { replace: true });
      setLoading(false);
    }
  }, [navigate]);

  // if (loading) {
  //   return null;
  // }
  return (
    <Container>
      <FormLogin />
    </Container>
  );
};

export default Login;
