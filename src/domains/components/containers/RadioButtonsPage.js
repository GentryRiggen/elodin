import React from 'react';
import { List, RadioButton } from '../../../../components';

class RadioButtonsPage extends React.Component {
  static navigationOptions = { headerTitle: 'Radio Buttons' };

  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }

  itemSelected(selected) {
    return () => {
      this.setState({ selected });
    };
  }

  render() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(id => ({
      headerText: `Radio Button ${id}`,
      secondaryText: 'If you select this radio button it will become the only selected item.',
      secondaryLines: 2,
      onPress: this.itemSelected(id),
      divider: true,
      rightContent: (
        <RadioButton
          checked={this.state.selected === id}
          onPress={this.itemSelected(id)}
        />
      ),
    }));

    return (
      <List dataSource={items}/>
    );
  }
}

export default RadioButtonsPage;
