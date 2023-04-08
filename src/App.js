import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import Standard from './components/standard';
import Subject from './components/subject';
import Chapter from './components/chapter';
import Topic from './components/Topic';
import TopicContent from './components/TopicContent';

function App() {
  return (
    <ChakraProvider>
      <Box bg="gray.50" minH="100vh">
        <Container maxW="container.lg" mt="8">
          <Router>
            <Switch>
              <Route exact path="/">
                <Standard />
              </Route>
              <Route exact path="/subject/:standard">
                <Subject />
              </Route>
              <Route exact path="/chapter/:standard/:subject">
                <Chapter />
              </Route>
              <Route exact path="/topic/:standard/:subject/:chapter">
                <Topic />
              </Route>
              <Route exact path="/TopicContent/:standard/:subject/:chapter/:topic">
                <TopicContent />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
