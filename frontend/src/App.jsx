import { SocialLinkButtons } from "./components/auth/SocialLinkButtons";
import { Button } from "./components/common/Button";
import { TextLink } from "./components/common/TextLink";
import { Input } from "./components/common/Input";

export const App = () => {
  return (
    <>
      <div className="bg-[var(--color-bg-neutral-primary)] h-full flex flex-col p-20 gap-5">
        <TextLink size="md" variant="primary">
          Texto 1
        </TextLink>
        <TextLink size="md" variant="secondary">
          Texto 2
        </TextLink>

        <Button size="sm" variant="secondary" type="button">
          Clique em mim
        </Button>

        <SocialLinkButtons size="md">Sign up with</SocialLinkButtons>
        <div className="flex flex-1 gap-2">
          <Input placeholder={"e.g., John"} label={"First name"} type="text" />
          <Input placeholder={"e.g., John"} label={"Last name"} type="text" />
        </div>
      </div>
    </>
  );
};
