import { CityLogo } from "../ui/icons";
import { ArrowFunctionElement } from "../Common/types";

const Footer: ArrowFunctionElement = (): JSX.Element => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" link={true} linkTo="/" />
      </div>
      <div className="footer_discl">
        Manchester city 2021.All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
