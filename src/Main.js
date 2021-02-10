import styled from 'styled-components';

const StyledH2 = styled.h2`
font-size: 30px;
padding-bottom: 10px;
`
const StyledDiv = styled.div`
margin: 8% 5%;
border-bottom: 1px solid black;
padding-bottom: 30px;
`
const StyledP = styled.p`
font-size: 18px;
margin: 15px;
`

const Main = () => {

  return (
    <StyledDiv>
      <StyledH2>Where to begin... Don't worry. Read this and eveything will make sense.</StyledH2>
      <StyledP>Farm-to-table, fanny pack cold-pressed mixtape readymade biodiesel blog man bun 8-bit tofu neutra selvage food truck. Pork belly intelligentsia jean shorts craft beer. Before they sold out snackwave austin, farm-to-table kitsch 8-bit edison bulb gluten-free franzen eiusmod flannel. Offal adipisicing fugiat exercitation snackwave leggings, drinking vinegar squid brooklyn direct trade bicycle rights retro gochujang. Photo booth fixie etsy everyday carry. </StyledP>

      <StyledP>Irony duis voluptate lyft, bicycle rights officia meditation consectetur keytar umami fingerstache enim messenger bag tousled pariatur. Coloring book palo santo voluptate ut sartorial, vegan cardigan raw denim pabst synth in. Copper mug tbh ethical freegan. Magna wayfarers man braid est sustainable sriracha do trust fund exercitation thundercats labore.</StyledP>

    </StyledDiv>
  );
}

export default Main;