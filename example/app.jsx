import React from "react";
import BreadCrumbs from "../src/index.jsx";

let levels = {
  current: "bar",
  foo: { id: 1, title: "foo" },
  bar: { id: 1, title: "bar" },
  baz: false
};

/*eslint no-unused-vars:0 */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { current: levels.current };
  }

  selectLevel(selection) {
    this.setState({ current: selection.title });
  }

  render() {
    let { current } = this.state;
    levels.current = current;

    return (
      <section>
        <BreadCrumbs
          levels={ levels }
          selectLevel={ this.selectLevel.bind(this) }/>
        <div>Current Level = { current }</div>
      </section>
    );
  }
}

React.render(<App/>, document.body);
