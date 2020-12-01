import React from 'react';
import { SearchBar } from 'react-native-elements';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  updateSearch(search) {
    this.setState({ search });
  }

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Search name..."
        onChangeText={(text) => this.updateSearch(text)}
        value={search}
        platform="default"
        lightTheme
      />
    );
  }
}

export default Search;
