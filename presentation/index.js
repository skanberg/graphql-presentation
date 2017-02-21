// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image src={images.logo} height={200}/>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A presentation by Fredrik Skånberg for ReactJS Göteborg
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="tertiary">What is GraphQL</Heading>
          <List>
            <ListItem>A data query language</ListItem>
            <ListItem>Developed by Facebook 2012</ListItem>
            <ListItem>Open sourced 2015</ListItem>
          </List>
        </Slide>
        <Slide>
          <Text>Many applications have no formalized client-server contract. Developers access server capabilities through ad hoc endpoints and write custom code to fetch the data they need.</Text>
        </Slide>
        <Slide>
          <Text>Facebook needed a data fetching API that could be used for their different clients: Web, iOS and Android.</Text>
        </Slide>
        <Slide>
          <Text>With GraphQL, no more ad hoc endpoints or object retrieval with multiple roundtrips to access server data. Instead an elegant query dispatched to a single endpoint.</Text>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">With GraphQL</Heading>
          <List fit>
            <ListItem>Ask for what you need, get exactly that</ListItem>
            <ListItem>Get many resources in a single request</ListItem>
            <ListItem>Uses a type system</ListItem>
            <ListItem>Powerful developer tools</ListItem>
            <ListItem>Evolve your API without versions</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">Works with different servers</Heading>
          <List>
            <ListItem>Javascript (reference implementation)</ListItem>
            <ListItem>Java</ListItem>
            <ListItem>.Net</ListItem>
            <ListItem>PHP</ListItem>
            <ListItem>Hack (this is what Facebook uses)</ListItem>
            <ListItem>And others</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">Client libraries</Heading>
          <List>
            <ListItem>Plain HTTP request</ListItem>
            <ListItem>Relay (Facebooks client for React)</ListItem>
            <ListItem>Apollo (bindings for React and Angular)</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary">Type of operations</Heading>
          <List>
            <ListItem>Query - Used for fetching data </ListItem>
            <ListItem>Mutation - Used for writing data</ListItem>
            <ListItem>Subscription - Server-side data pushing</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3} textColor="tertiary">DEMO</Heading>
        </Slide>
      </Deck>
    );
  }
}
