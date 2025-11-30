import { useState } from "react";
import { Link, useNavigate } from "react-route-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

//Assets
import LoginBg from "../../assets/images/bg/bgLogin.svg";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };
};
