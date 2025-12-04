import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { TextLink } from "../../components/common/TextLink";

import resetPasswordBg from "../../assets/images/bg/bgResetPassword.svg";
import arrowIcon from "../../assets/images/icons/arrow-left.svg";

export const ResetPassword = () => {
  return (
    <AuthLayout imageSrc={resetPasswordBg}>
      <div className="w-36 mt-2 mb-3 text-sm">
        <Link to="/signin">
          <Button
            variant="secondary"
            type="submit"
            icon={arrowIcon}
            className="p-1.5"
          >
            Back to login
          </Button>
        </Link>
      </div>

      <div className="mb-3">
        <h1 className="font-semibold mb-2 text-[40px] text-[var(--color-text-neutral-white)]">
          Reset password
        </h1>
        <p className="text-[var(--color-text-neutral-secondary)] font-normal text-sm">
          Please enter your registered email to receive a reset link.
        </p>
      </div>

      <form className="mt-4 flex flex-col gap-3">
        <Input label="Email" placeholder="Enter email" />

        <Link to="/verify-code">
          <Button variant="primary" type="submit" className="mt-4 p-4">
            Reset Pasword
          </Button>
        </Link>
      </form>
      <p className="text-center text-gray-500 mt-3 text-sm">
        Haven't received code yet?{" "}
        <Link to="">
          <TextLink children="Resend code" variant="primary" />
        </Link>
      </p>
    </AuthLayout>
  );
};
