import React from 'react';
import './header.scss';
import shouldPureComponentUpdate from 'react-pure-render/function';

class Header extends React.Component {
  //ES7 class property transform: https://github.com/jeffmo/es-class-fields-and-static-properties
  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component Header did mount.");
  }

  //Rendering happens only once, thanks to shouldPureComponentUpdate
  render() {
    //Use ES6 destructuring!
    let {title,subHeadline} = this.props;
    console.log("Header is rendering");

    return (
      <header className="header">
        <h1>{title}</h1>
        <p className="rotated">{subHeadline}</p>
      </header>
    )
  }
}

Header.propTypes = {
  title : React.PropTypes.string,
  subHeadline : React.PropTypes.string
};

Header.defaultProps = {
  title : "A default Header title",
  subHeadline : "Default sub headline"
};

export default Header;