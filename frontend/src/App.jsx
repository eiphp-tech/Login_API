import { SocialLinkButtons } from "./components/auth/SocialLinkButtons";
import { Button } from "./components/common/Button";
import { TextLink } from "./components/common/TextLink";

export const App = () => {
  return (
    <>
      <div className="bg-black h-full flex flex-col p-20 gap-5">
        <TextLink size="md" variant="primary">
          Texto 1
        </TextLink>
        <TextLink size="md" variant="secondary">
          Texto 2
        </TextLink>

        <Button size="sm" variant="secondary" type="button">
          Clique em mim
        </Button>

        <SocialLinkButtons />
      </div>
    </>
  );
};
