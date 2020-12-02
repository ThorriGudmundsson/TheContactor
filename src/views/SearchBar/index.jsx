import React from 'react';
import { SearchBar } from 'react-native-elements';
// import { getAllContacts } from '../../services/contactServices';
// import readContactsFromFile from '../../services/contactServices';


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
        lightTheme="true"
      />
    );
  }
}


export default Search;
