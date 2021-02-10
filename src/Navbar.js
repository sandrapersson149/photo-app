import styled from 'styled-components';

const StyledNav = styled.nav`
  background-image: url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  height: 100vh;
  padding: 70px;
  & h1 {
    font-size: 130px;
    letter-spacing: 7px;
    color: white;
  }
  & h2 {
    margin-left: 50px;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 50px;
    color: white;
  }
`

const StyledNavList = styled.div`
  display: flex;
  justify-content: flex-end;
    & a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 30px;
  }
    & a:hover {
    cursor: pointer;
    opacity: 0.4;
  }

`

const Navbar = () => {
  return (
    <StyledNav className="nav">

      <StyledNavList>
        <a href="/">Home</a>
        <a href="/">Explore</a>
        <a href="/">Contact</a>
      </StyledNavList>


      <h1>Pixello</h1>
      <h2>start exploring right now</h2>

    </StyledNav>
  );
}

export default Navbar;