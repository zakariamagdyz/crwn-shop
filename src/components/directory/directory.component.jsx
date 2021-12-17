import React from "react";
import { sections } from "../../assets/data/072 directory.data";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem key={section.id} {...section} />
        ))}
      </div>
    );
  }
}

export default Directory;
