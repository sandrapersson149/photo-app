// import SelectItem from './SelectItem';

import Data from "./Data";


const Selection = (props) => {

  return (<ul>{props.data.map(function (item) {
    return (<SelectItem key={item.id} item={item} />);
  })}</ul>
  );

  // return (
  //   <div>
  //     {Data.pics.filter(item.title => item.includes('lake')).map(filteredItems => (
  //       <li>{filteredItems}</li>
  //     ))}
  //   </div>

  // <li>{filteredItem.category}</li>


  // );
}

export default Selection;