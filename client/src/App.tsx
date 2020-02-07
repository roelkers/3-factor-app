import React from 'react';
import ApolloClient from 'apollo-boost'
import { ThemeProvider } from 'emotion-theming'
import theme from '@rebass/preset'
import { ApolloProvider } from '@apollo/react-hooks';
import Students from './students'
import { Text, Box } from 'rebass';

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Box><Text>Students:</Text></Box>
        <Box><Students /></Box>
      </div>
    </ThemeProvider>
  </ApolloProvider>
);


export default App;
