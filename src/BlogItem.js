import styled from 'styled-components';

const StyledLI = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 28%;
  list-style-type: none;
  margin: 2%;
  padding-bottom: 10px; 
  font-size: 17px;
  font-weight: 200;
  opacity: 0.8;
  & span {
    padding: 10px;
  }
  &:hover {
    box-shadow: 2px 5px 5px rgba(128, 128, 128, 0.473);
    flex-basis: 28.5%;
    opacity: 1;
  }
  &>img {
      width: 100%;
      margin-bottom: 10px;
  }
`

function BlogItem(props) {
  const imageURL = "https://images.unsplash.com/photo-";

  return (<StyledLI className="picList">
    <img src={imageURL + props.item.pic_path} alt="Mountain" />
    <span>{props.item.title} by {props.item.photografer}</span><span>"{props.item.description}"</span>
  </StyledLI>)
}

export default BlogItem;