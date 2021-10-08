import React from 'react';
import data from './data.json';
import Item from './Item';
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
    };
  }

  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });
  };
  render() {
    let categories = data.map((item) => item.category);
    const uniqueCategories = [...new Set(categories)];
    console.log(categories);
    return (
      <>
        <ul className="category">
          {uniqueCategories.map((category) => {
            return (
              <li
                key={category}
                className={
                  category === this.state.activeCategory ? 'active' : 'tag'
                }
                onClick={() => this.handleClick(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
        <Item />
      </>
    );
  }
}

export default Tags;
