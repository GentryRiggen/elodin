import React from 'react';
import {
  Checkbox,
  List,
  Text,
} from '../../../../components';

class CheckBoxesPage extends React.Component {
  static navigationOptions = {
    header: {
      title: <Text styleName="title">Checkboxes</Text>,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      items: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
      },
    };
  }

  itemSelected(selected) {
    return () => {
      this.setState({
        items: {
          ...this.state.items,
          [selected]: !this.state.items[selected],
        },
      });
    };
  }

  render() {
    const items = Object.keys(this.state.items).map(id => ({
      headerText: `Checkbox ${id}`,
      secondaryText: 'Check me! Check me! Check me!',
      secondaryLines: 2,
      onPress: this.itemSelected(id),
      divider: true,
      rightContent: (
        <Checkbox
          checked={this.state.items[id]}
          onPress={this.itemSelected(id)}
        />
      ),
    }));

    return (
      <List
        dataSource={items}
      />
    );
  }
}

export default CheckBoxesPage;
