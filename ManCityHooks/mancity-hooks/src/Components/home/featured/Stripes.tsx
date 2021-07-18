import { easePolyOut } from "d3-ease";
import { Animate } from "react-move";
import {
  ArrowFunctionElement,
  ArrowFunctionElements,
} from "../../Common/types";

interface Stripe {
  background: string;
  left: number;
  rotate: number;
  top: number;
  delay: number;
}

const stripes: Stripe[] = [
  {
    background: "#98c5e9",
    left: 120,
    rotate: 25,
    top: -260,
    delay: 0,
  },
  {
    background: "#ffffff",
    left: 360,
    rotate: 25,
    top: -397,
    delay: 200,
  },
  {
    background: "#98c5e9",
    left: 600,
    rotate: 25,
    top: -498,
    delay: 400,
  },
];

const Stripes: ArrowFunctionElement = (): JSX.Element => {
  const showStripes: ArrowFunctionElements = (): JSX.Element[] => {
    // tslint:disable-next-line: typedef
    return stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: stripe.background,
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: [stripe.background],
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            // end(){
            //     console.log('animation finished')
            // }
          },
        }}
      >
        {
          // tslint:disable-next-line: typedef
          ({ opacity, left, rotate, top, background }) => {
            return (
              <div
                className="stripe"
                style={{
                  background,
                  opacity,
                  transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`,
                }}
              />
            );
          }
        }
      </Animate>
    ));
  };

  return <div className="featured_stripes">{showStripes()}</div>;
};

export default Stripes;
