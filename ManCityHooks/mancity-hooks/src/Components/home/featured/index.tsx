import Stripes from "./Stripes";
import Text from "./Text";
import { ArrowFunctionElement } from "../../Common/types";

const Featured: ArrowFunctionElement = (): JSX.Element => {
  return (
    <div className="featured_wrapper">
      <Stripes />
      <Text />
      {/* some text */}
    </div>
  );
};

export default Featured;
