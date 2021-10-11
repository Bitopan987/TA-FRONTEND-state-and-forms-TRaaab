function Item(props) {
  return (
    <div className="container">
      <ul className="items">
        {props.allItems.map((item) => {
          return (
            <li className="item">
              <div className="flex">
                <h2>{item.title} ...........</h2>
                <p>Price: ${item.price}</p>
              </div>
              <p className="description">{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Item;
