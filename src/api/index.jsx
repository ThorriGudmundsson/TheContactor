import _ from 'lodash';
import data from '../resources/data.json';

const contains = ({ name }, query) => {
  if (name.includes(query)) {
    return true;
  }

  return false;
};

export const getUsers = (limit = 20, query = '') => new Promise((resolve, reject) => {
  if (query.length === 0) {
    resolve(_.take(data.contacts, limit));
  } else {
    const formattedQuery = query.toLowerCase();
    const results = _.filter(data.contacts, (user) => contains(user, formattedQuery));
    resolve(_.take(results, limit));
  }
});

export default getUsers;
