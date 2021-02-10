import BlogItem from './BlogItem'
import styled from 'styled-components';

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

function BlogList(props) {
  return (<StyledUL className="picUl">{props.data.map(function (item) {
    return (<BlogItem key={item.id} item={item} />);
  })}</StyledUL>);
}

export default BlogList;