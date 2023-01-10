import { AppbarHeader, NavLinkStyled } from './Appbar.styled';

const Appbar = () => {
  return (
    <AppbarHeader>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </AppbarHeader>
  );
};

export default Appbar;
