import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: lightgray;
  & p {
    font-size: 18px;
    font-weight: 200;
  }
`

const Footer = () => {

  return (
    <StyledFooter>
      <p>Created by Sandra - 2021</p>
    </StyledFooter>
  );
}

export default Footer;