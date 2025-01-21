import { FC } from "react";

import "./landing-page.scss";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

export const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__overlay">
        <div className="landing-page__container">
          <div className="landing-page__intro">
            <h1>Welcome to Paradise Nursery </h1>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <Link to="/products">
              <Button>Get Started</Button>
            </Link>
          </div>

          <div className="landing-page__desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, facere!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              provident dicta ab harum tenetur suscipit voluptates tempore
              repellat error facere corrupti dolorum ex eveniet nam deleniti
              quam esse, saepe sapiente cupiditate? Eum aut ipsum obcaecati
              ratione enim. Similique minima, cum deleniti vel sequi accusamus
              consequuntur sed quisquam! Vel, minima dolorum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              corrupti consequuntur hic cupiditate, beatae cumque quaerat error
              asperiores voluptates perspiciatis aliquam tempora consequatur a
              repellat deleniti vel voluptas, iusto debitis.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vel
              placeat temporibus commodi quo quaerat molestiae laboriosam modi
              dignissimos animi incidunt necessitatibus. Praesentium tempore
              voluptatibus qui recusandae neque dolor voluptas?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
