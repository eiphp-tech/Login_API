import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { OTPInput } from "../../components/common/OTPInput";
import { Button } from "../../components/common/Button";
import { TextLink } from "../../components/common/TextLink";

import verifyCodeBg from "../../assets/images/bg/bgOTP.svg";
import arrowIcon from "../../assets/images/icons/arrow-left.svg";

export const VerifyCode = () => {
  return (
    <AuthLayout imageSrc={verifyCodeBg}>
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
          Verify Code
        </h1>
        <p className="text-[var(--color-text-neutral-secondary)] font-normal text-sm">
          Enter the 6-digit code sent to your email address to complete
          verification.
        </p>
      </div>

      <form className="mt-4 flex flex-col gap-3">
        <div className="flex gap-2 text-xl justify-center ">
          <OTPInput length={1} />
          <OTPInput length={1} />
          <OTPInput length={1} />
          <OTPInput length={1} />
          <OTPInput length={1} />
        </div>

        <Button variant="primary" type="submit" className="mt-4 p-4">
          Reset Pasword
        </Button>
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
