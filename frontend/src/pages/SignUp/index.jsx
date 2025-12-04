import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Input } from "../../components/common/Input";
import { SocialLinkButtons } from "../../components/auth/SocialLinkButtons";
import { Button } from "../../components/common/Button";
import { TextLink } from "../../components/common/TextLink";
import { InputPhone } from "../../components/common/InputPhone";

import SignupBg from "../../assets/images/bg/bgSignUp.svg";

export const SignUp = () => {
  return (
    <AuthLayout imageSrc={SignupBg}>
      <div className="mb-3">
        <h1 className="font-semibold mb-2 text-[40px] text-[var(--color-text-neutral-white)]">
          Let's Begin!
        </h1>
        <p className="text-[var(--color-text-neutral-secondary)] font-normal text-sm">
          Mainr journey starts with a few quick details
        </p>
      </div>

      <SocialLinkButtons />

      <form className="mt-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <Input label="First Name" placeholder="e.g., John" />
          <Input label="Last Name" placeholder="e.g., Doe" />
        </div>

        <div className="flex flex-col gap-3">
          <Input label="Email" placeholder="e.g., john.doe@example.com" />
          <InputPhone placeholder="e.g., (123) 456-7890" />
        </div>

        <div>
          <p className="text-sm text-gray-500 mt-4">
            By click Continue, you agree to our
            <TextLink
              variant="secondary"
              children=" Terms of Use"
              className="cursor-pointer"
            />{" "}
            and
            <TextLink
              variant="secondary"
              children=" Privacy Policy"
              className="cursor-pointer"
            />
            <span className="text-white"></span>
          </p>
          <Button variant="primary" type="submit" className="mt-1.5 p-4">
            Continue
          </Button>
        </div>
      </form>

      <p className="text-center text-gray-500 mt-8 text-sm">
        Already have an account?{" "}
        <Link to="/signin">
          <TextLink children="Login" variant="primary" />
        </Link>
      </p>
    </AuthLayout>
  );
};
