import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Input } from "../../components/common/Input";
import { SocialLinkButtons } from "../../components/auth/SocialLinkButtons";
import { Button } from "../../components/common/Button";
import { TextLink } from "../../components/common/TextLink";

import LoginBg from "../../assets/images/bg/bgLogin.svg";

export const SignIn = () => {
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
    setTimeout(() => {
      setIsLoading(false);
      alert("Login success!");
      // navigate('/dashboard');
    }, 1500);
  };

  return (
    <AuthLayout imageSrc={LoginBg}>
      <div className="mb-3">
        <h1 className="font-semibold mb-2 text-[40px] text-[var(--color-text-neutral-white)]">
          Welcome Back!
        </h1>
        <p className="text-[var(--color-text-neutral-secondary)] font-normal text-sm">
          Log in to continue where you left off.
        </p>
      </div>

      <SocialLinkButtons />

      <form action={handSubmit} className="flex flex-col gap-2 mt-4">
        <div className="flex flex-col gap-2">
          <Input
            label="Email / phone number"
            placeholder="Enter email or phone number"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            label="Password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="accent-brand-lime w-4 h-4 rounded "
              checked={formData.remember}
              onChange={(e) =>
                setFormData({ ...formData, remember: e.target.checked })
              }
            />
            <span className="text-sm font-normal text-gray-300">
              Remember me for 14 days
            </span>
          </label>
          <Link to="/reset-password" class="text-sm">
            <TextLink children="Forgot password?" variant="primary" />
          </Link>
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          className="mt-4 p-4"
        >
          {isLoading ? "Loading..." : "Continue"}
        </Button>
      </form>
      <p className="text-center text-gray-500 mt-8 text-sm">
        Don't have an account?{" "}
        <Link to="/signup">
          <TextLink children="Sign up" variant="primary" />
        </Link>
      </p>
    </AuthLayout>
  );
};
