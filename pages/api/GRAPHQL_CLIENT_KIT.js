import { ApolloClient, InMemoryCache, createHttpLink, gql} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { Headers } from 'cross-fetch';

// global.Headers = global.Headers || Headers;

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_END_POINT + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem('authToken');
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${process.env.TOKEN}` : '',
      'Content-Type': 'application/json'
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const get = async (query) => {
    const {data} = await client.query({
        query: gql`${query}`
    })
    return data
}