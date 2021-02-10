

const SelectItem = (props) => {
  const img = "https://images.unsplash.com/photo-";
  return (
    <li>
      <img src={img + props.item.pic_path} alt="Selected image" />
      <span>{props.item.title}</span>
    </li>
  );
}

export default SelectItem;