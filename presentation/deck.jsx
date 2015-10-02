import React from "react/addons";

import {
  Appear, BlockQuote, Cite  CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Text
} from "../src/spectacle";

// import preloader from "../src/utils/preloader";

// import Interactive from "./interactive";

const images = {
  metalab: require("./metalab.png"),
};

// preloader([images.metalab]);
//

// Title/subtitle
function sectionTitleSlide(title, subtitle) {
  return (
    <Slide>
      <Heading size={3}>{title}</Heading>
      <Heading size={5}>{subtitle}</Heading>
    </Slide>
  );
}

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500}>
        <Slide>
          <Heading size={1} fit lineHeight={1.2}>
            Zero to Slack in 30 minutes
          </Heading>
          <Heading size={1} fit>
            An exploration of modern web development
          </Heading>
          <Link href="https://metalab.co"><Image height="90px" width="90px" src={images.metalab}/></Link>
        </Slide>

        {sectionTitleSlide('Hi there', "We're Izaak, James, and Jason from MetaLab")}

        {sectionTitleSlide('Modern Web Development', "This ain't Wordpress and jQuery")}
        <Slide>
          <Heading size={4}>Slerk™</Heading>
          <Text>We'll be finishing a real-time FE app</Text>
          <Text>Some of the techs we'll use:</Text>
          <Text><Appear fid="1">Elixir, Phoenix, React, Redux, git, npm, Webpack
              (with Hot Module Reloading), Babel, ES6/2015, LoDash, PostCSS,
              CSS Modules, and a regular old terminal. (phew!)
          </Appear></Text>
        </Slide>

        <Slide>
          <Heading size={4}>But first, do this</Heading>
          <CodePane lang="bash" source='
              > git clone https://github.com/metalabdesign/slerk-web.git
              > cd slerk-web
              > npm install
              '/>
        </Slide>
      </Deck>
    );
  }
}
