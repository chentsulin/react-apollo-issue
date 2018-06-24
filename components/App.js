import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Hello = gql`
  {
    hello
  }
`;

export default function App() {
  return (
    <div className="App">
      <Query query={Hello}>
        {({ data, error, loading }) => {
          console.log({ data, error, loading });
          if (loading) return 'loading..';
          if (error) return error.message;
          return data.hello;
        }}
      </Query>
    </div>
  );
}
