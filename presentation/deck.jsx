import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

// import preloader from "../src/utils/preloader";

// import Interactive from "./interactive";

// const images = {
//   city: require("./city.jpg"),
//   kat: require("./kat.png"),
//   logo: require("./formidable-logo.svg")
// };

// preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500}>
        <Slide>
          <Heading size={1} fit lineHeight={1}>
            Zero to Slack in 30 minutes
          </Heading>
          <Heading size={1} fit>
            An exploration of cutting-edge web technologies
          </Heading>
          <Heading size={1} fit>
            By MetaLab
          </Heading>
        </Slide>
        <Slide>
          <Heading>Lorem ipsum</Heading>
          <CodePane
            lang="javascript"
            source={require("raw!./example-code-block")}
          />
        </Slide>
      </Deck>
    );
  }
}
