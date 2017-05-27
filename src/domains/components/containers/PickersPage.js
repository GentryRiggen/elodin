import React from 'react';
import {
  Button,
  Gap,
  Page,
  Picker,
} from '../../../../components';

import { books } from '../../../lib/data';

class PickersPage extends React.Component {
  static navigationOptions = { headerTitle: 'Pickers' };

  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
      selected2: 2,
      selected3: 3,
    };
  }

  onItemSelected(stateName) {
    return (selected) => {
      this.setState({ [stateName]: selected });
    };
  }

  getItems() {
    const items = {};
    books.forEach(book => items[book.id] = {
      ...book,
      headerText: book.title,
      secondaryText: `${book.author.lastName}, ${book.author.firstName}`,
    });
    return items;
  }

  render() {
    return (
      <Page>
        <Gap top={16} />
        <Picker
          header="Random list of books (No Search)"
          items={this.getItems()}
          selected={this.state.selected}
          onItemSelected={this.onItemSelected('selected')}
        />

        <Gap top={16} />
        <Picker
          header="Random list of books (Search)"
          items={this.getItems()}
          selected={this.state.selected}
          onItemSelected={this.onItemSelected('selected')}
          showSearch
          searchKeys={['title', 'author.lastName', 'author.firstName']}
        />

        <Gap top={16} />
        <Picker
          header="Random list of books"
          items={this.getItems()}
          selected={this.state.selected2}
          onItemSelected={this.onItemSelected('selected2')}
          showSearch
          searchKeys={['title', 'author.lastName', 'author.firstName']}
        />

        <Gap top={16} />
        <Picker
          header="Customer Picker Random Books"
          items={this.getItems()}
          button={<Button text="Custom Button" />}
          selected={this.state.selected3}
          onItemSelected={this.onItemSelected('selected3')}
          showSearch
          searchKeys={['title', 'author.lastName', 'author.firstName']}
        />
      </Page>
    );
  }
}

export default PickersPage;
