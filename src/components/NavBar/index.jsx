import { NavLink } from "react-router-dom";

import { Container, Logo, Li, Ul } from "./styles";
import logoSrc from "../../assets/insta.jpeg";

const NavBar = () => {
  return (
    <Container>
      <NavLink to="/">
        <Logo src={logoSrc} alt="logo" />
      </NavLink>
      <Ul>
        <Li>
          <NavLink className="anchor" to={`sign-in`}>
            Sign in
          </NavLink>
        </Li>
        <Li>
          <NavLink className="anchor" to={`sign-up`}>
            Sign up
          </NavLink>
        </Li>
        <Li>
          <NavLink className="anchor" to={`profile`}>
            Profile
          </NavLink>
        </Li>
      </Ul>
    </Container>
  );
};

export default NavBar;
