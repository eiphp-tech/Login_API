import { Link } from "react-router-dom";
import { AuthLayout } from "../../components/layout/AuthLayout";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

import setPasswordBg from "../../assets/images/bg/bgSetPassword.svg";
import arrowIcon from "../../assets/images/icons/arrow-left.svg";

export const SetPassword = () => {
  return (
    <AuthLayout imageSrc={setPasswordBg}>
      <div className="w-36 -mt-4 mb-3 text-sm">
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
          Set Password
        </h1>
        <p className="text-[var(--color-text-neutral-secondary)] font-normal text-sm">
          Must be at least 8 characters, including a number and a special
          character..
        </p>
      </div>

      <form className="mt-4 flex flex-col gap-3">
        <Input label="Password" placeholder="Enter password" />
        <Input label="Re-enter Password" placeholder="Enter password" />

        <Button variant="primary" type="submit" className="mt-4 p-4">
          Save password
        </Button>
      </form>
    </AuthLayout>
  );
};
