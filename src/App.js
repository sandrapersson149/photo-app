// import './App.css';
import Data from './Data';
import Navbar from './Navbar';
import BlogList from './BlogList';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Weather from './Weather';

const img = "https://images.unsplash.com/photo-";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`
const StyledContainer = styled.div`
background-color: #f2f2f2;
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  margin-bottom: 15%;
  margin-left: 0;
  margin-right: 0;
`

const StyledH2 = styled.h2`
  background-color: #f2f2f2;
  text-align: center;
  padding: 30px;
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 300;
`

const StyledSelect = styled.div`
  // border: 2px solid red;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 75%;
  list-style-type: none;
  padding: 20px 20px 28px 20px;
  margin: 2%;
  font-size: 17px;
  font-weight: 200;
  & span {
    padding: 10px;
  }
  &>img {
      width: 100%;
      padding: 10px;
  }
`

function ContactForm(props) {

  // console.log('ContactForm ran ' + props.name);
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Your name:
        <input
          type="text"
          value={props.name}
          onChange={e => props.setName(e.target.value)}>
        </input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  );
}


function App() {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting name: ${name}`);
    setName('');
  }

  return (
    <div className="App">

      <GlobalStyle />

      <Navbar />

      <Main />

      <Weather />

      <ContactForm name={name} setName={setName} handleSubmit={handleSubmit} />

      <StyledH2>This month we are featuring the top photografers from the catagory - Street</StyledH2>
      <StyledContainer>
        {Data.pics.filter(item => item.category === 'Street').map(filteredItem => (
          <StyledSelect>
            <img src={img + filteredItem.pic_path} />
            <span>Photografer: {filteredItem.photografer}</span>
            <p>"{filteredItem.long_desc}"</p>
          </StyledSelect>
        ))}
      </StyledContainer>


      <BlogList data={Data.pics} />

      <Footer />

    </div>
  );
}

export default App;
