import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './List.css';

/**
 * Loader component
*/
/**
 * Handle the Header page
 */
class List extends Component {
  static propTypes = {
    quantity: PropTypes.number.isRequired,
  };
  state = {
    elements: 0
  }

  constructor(props){
    super(props);
    this.state.elements = [];
    for(let i=0; i<=100; i +=1){
      let color = 'white';
      if(i%3 === 0) color = 'red';
      if(i%5 === 0) color = 'blue';
      if(i%5 === 0 && i%3 === 0) color = 'green';
      const row = {
        color,
        value: i
      };
      this.state.elements.push(row);
    }

  }

  render() {
    const {elements} = this.state;
    return (
      <div className="list">
        {
          elements.map((e) =>
          (
            <div className={`list__number ${e.color}`}>
              {e.value}
          </div>)
        )}
      </div>
    );
  }
};

export default List;
