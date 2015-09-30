import React from "react/addons";

import {
  Appear, BlockQuote, Cite  CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Text
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
      </Deck>
    );
  }
}
