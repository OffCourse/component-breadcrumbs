import React from "react";
import classnames from "classnames";
import R from "ramda";

import Breadcrumb from "offcourse-component-breadcrumb";

class Breadcrumbs extends React.Component {

  constructor(props){
    super(props);
    this.name = "breadcrumbs";
  }

  classes(){
    return classnames({
      [this.name]: true
    });
  }

  render() {
    let { levels, selectLevel } = this.props;
    let filterLevels = R.filter(([key, value]) => key !== "current" && value);
    let filteredLevels = filterLevels(R.toPairs(levels));

    let createBreadcrumbs = R.map((levelData) => {
      let [type, { title, id }] = levelData;
      let level = { type, title, id };
      let current = levels.current === level.type;

      return <Breadcrumb key={ levelData[0] } level={ level }
        selectLevel={ selectLevel } current={ current }/>;

    });

    let breadcrumbs = createBreadcrumbs(filteredLevels);

    return (
      <nav className={ this.classes() }>
       <ul>{ breadcrumbs }</ul>
      </nav>
    );
  };
}

Breadcrumbs.propTypes = {
  levels: React.PropTypes.object.isRequired
};

export default Breadcrumbs;
