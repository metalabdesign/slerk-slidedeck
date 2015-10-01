import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

// import preloader from "../src/utils/preloader";

// import Interactive from "./interactive";

const images = {
  metalab: require("./metalab.png"),
};

// preloader([images.metalab]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500}>
        <Slide>
          <Heading size={1} fit lineHeight={1.2}>
            Zero to Slack in 30 minutes
          </Heading>
          <Heading size={1} fit>
            An exploration of cutting-edge web technologies
          </Heading>
          <Link href="https://metalab.co"><Image src={images.metalab}/></Link>
        </Slide>
        <Slide>
          <Heading>Lorem ipsum</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./example-code-block")}
          />
        </Slide>
        <Slide>
          <Heading size={2}>Subtitle here</Heading>
          <Heading size={5}>Subitlte tag here</Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Slide title</Heading>
          <Text>Blah blah aosent oaiersnt oiaerns t</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <List>
            <ListItem><Appear fid="1">Inline style based theme system</Appear></ListItem>
            <ListItem><Appear fid="2">Autofit text</Appear></ListItem>
            <ListItem><Appear fid="3">Flexbox layout system</Appear></ListItem>
            <ListItem><Appear fid="4">React-Router navigation</Appear></ListItem>
            <ListItem><Appear fid="5">PDF export</Appear></ListItem>
            <ListItem><Appear fid="6">And...</Appear></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
