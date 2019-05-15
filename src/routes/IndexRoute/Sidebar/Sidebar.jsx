import React, { PureComponent } from 'react';
import { upper as alphabet } from 'alphabet';
import './Sidebar.css'

class Sidebar extends PureComponent {
  handleClick = (id) => () => {
    const elm = document.getElementById(id);

    if (elm) {
      window.scrollTo(0, elm.offsetTop) 
    }
  }

  render() {
    return (
      <div className="side-pagination">
        {alphabet.map(item => (
          <div
            key={item}
            className="item"
            onClick={this.handleClick(item.toLowerCase())}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;