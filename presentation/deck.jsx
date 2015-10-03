import React from "react/addons";

import {
  Appear, BlockQuote, Cite  CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import styles from '../themes/metalab/index';
// import Interactive from "./interactive";

const images = {
  metalab: require("./images/metalab.png"),
  slerkScreenshot: require("./images/slerk-screenshot.png"),
  reactSlide: require("./images/react-slide.jpg"),
  smartVDumbComponents: require("./images/smart-v-dumb-components.png"),
};

preloader([images.slerkScreenshot, images.reactSlide, images.smartVDumbComponents]);

// Title/subtitle
function sectionTitleSlide(title, subtitle) {
  return (
    <Slide>
      <Heading size={4}>{title}</Heading>
      <Heading size={5}>{subtitle}</Heading>
    </Slide>
  );
}

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={200}>

        <Slide>
          <Heading size={4} fit>
            Zero to Slack in 30 minutes
          </Heading>
          <Text>An exploration of modern web development</Text>
        </Slide>

        <Slide>
          <Heading size={4}>Hi there</Heading>
          <Text>We're Izaak, James, and Jason from MetaLab</Text>
          <Link href="https://metalab.co"><Image style={styles.MLlogo}  height="200px" width="200px" src={images.metalab}/></Link>
        </Slide>

        <Slide>
          <Heading size={4}>Let's build Slerk™</Heading>
          <Text>A real time multiuser chat application</Text>
          <Image src={images.slerkScreenshot.replace("/", "")} style={styles.slerkScreenshot}/>
        </Slide>

        <Slide>
          <Heading size={4}>Main technologies</Heading>
          <List>
            <ListItem>
              <Link href="http://elixir-lang.org/">Elixir</Link>
              {" & "}
              <Link href="http://www.phoenixframework.org/">Phoenix</Link>
            </ListItem>
            <ListItem>
              <Link href="https://babeljs.io/">Babel</Link>
              {' '}
              (<Link href="http://es6-features.org/">ES6/2015</Link>)
            </ListItem>
            <ListItem>
              <Link href="https://webpack.github.io/">Webpack</Link> (HMR, CSS Modules)
            </ListItem>
            <ListItem>
              <Link href="https://github.com/rackt/redux">Redux</Link> (&amp; devtools)
            </ListItem>
            <ListItem>
              <Link href="https://facebook.github.io/react/">React</Link>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Elixir &amp; Phoenix</Heading>
          <List>
            <ListItem>Elixir: targets Erlang VM, looks like Ruby</ListItem>
            <ListItem>Concurrent, immutable, functional</ListItem>
            <ListItem>Phoenix: web framework for Elixir (Rails-ish)</ListItem>
            <ListItem>Built-in websocket channels (good for Slerk)</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Babel, ES6/2015</Heading>
          <Text>Tomorrow's JavaScript today!</Text>
          <CodePane lang="javascript" source={require("raw!./code/es6-examples-1")}/>
        </Slide>

        <Slide>
          <Heading size={4}>Babel, ES6/2015 (2)</Heading>
          <CodePane lang="javascript" source={require("raw!./code/es6-examples-2")}/>
        </Slide>

        <Slide>
          <Heading size={4}>Webpack</Heading>
          <List>
            <ListItem>Asset build + compilation system</ListItem>
            <ListItem>Source files, runs transforms, builds assets</ListItem>
            <ListItem>Huge list of plugins/transforms/etc</ListItem>
            <ListItem>React HMR - hot patches JS without reloads</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Redux</Heading>
          <List>
            <ListItem>"Predictable state mangement for JS apps"</ListItem>
            <ListItem>Actions → reducers → store</ListItem>
            <ListItem>React components render based on store</ListItem>
            <ListItem>Only 99 lines without guards/checks</ListItem>
            <ListItem>Rich debugging tools</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Last, but not least...</Heading>
        </Slide>

        <Slide bgImage={images.reactSlide.replace("/", "")}></Slide>

        <Slide>
          <Heading size={4}>React is...</Heading>
          <List>
            <ListItem>Declarative view library for UIs</ListItem>
            <ListItem>Encapsulates data, markup, behaviour</ListItem>
            <ListItem>Easy to reason about</ListItem>
            <ListItem>Efficient rendering</ListItem>
            <ListItem>Made by Facebook, in prod many places</ListItem>
            <ListItem>React Native for iOS, Android</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>React Components</Heading>
          <CodePane lang="javascript" source={require("raw!./code/react-pre")}/>
          <CodePane lang="html" source={require("raw!./code/react-post")}/>
        </Slide>

        <Slide>
          <Heading size={4}>React Components (2)</Heading>
          <CodePane lang="javascript" source={require("raw!./code/react-2-pre")}/>
          <CodePane lang="html" source={require("raw!./code/react-2-post")}/>
        </Slide>

        <Slide>
          <Heading size={4}>React Components (3)</Heading>
          <CodePane lang="javascript" source={require("raw!./code/react-3-pre")}/>
          <CodePane lang="html" source={require("raw!./code/react-3-post")}/>
        </Slide>

        <Slide>
          <Heading size={4}>Smart/Dumb Components</Heading>
          <Text>Most components should be dumb, only props</Text>
          <Image margin="30px auto 40px" width="50vw" src={images.smartVDumbComponents.replace("/", "")}/>
        </Slide>

        <Slide>
          <Heading size={4}>Let's code!</Heading>
          <Text>Go to repo, follow instructions</Text>
          <Text>
            <Link href="https://github.com/metalabdesign/startupslam-workshop">
              https://github.com/metalabdesign/startupslam-workshop
            </Link>
          </Text>
        </Slide>


      </Deck>
    );
  }
}
