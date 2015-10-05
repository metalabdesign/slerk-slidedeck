import React from "react/addons";
import MTRC from "markdown-to-react-components";

import BlockQuote from './block-quote';
import CodePane from './code-pane';
import Heading from './heading';
import Image from './image';
import Link from './link';
import List from './list';
import ListItem from './list-item';
import Quote from './quote';
import S from './s';
import Text from './text';

// MTRC instantiates components internally, so we have to do this to bind props
function spectacleComponent(component, boundProps = {}) {
  return React.createClass({
    render(){
      const props = {...this.props, ...boundProps};
      return React.createElement(component, {...props}, this.props.children);
    }
  });
}

class CodePaneMTRC extends React.Component {
  render() {
    return <CodePane lang={this.props.language} source={this.props.code} />;
  }
};


// Would like to expose this information somehow
MTRC.configure({
  a: Link,
  code: CodePaneMTRC,
  del: spectacleComponent(S, {type: 'strikethrough'}),
  em: spectacleComponent(S, {type: 'italic'}),
  h1: spectacleComponent(Heading, {size: 1}),
  h2: spectacleComponent(Heading, {size: 2}),
  h3: spectacleComponent(Heading, {size: 3}),
  h4: spectacleComponent(Heading, {size: 4}),
  h5: spectacleComponent(Heading, {size: 5}),
  h6: spectacleComponent(Heading, {size: 6}),
  img: Image,
  li: ListItem,
  p: Text,
  strong: spectacleComponent(S, {type: 'bold'}),
  ul: List
});


export default class Markdown extends React.Component {
  render() {
    const content = typeof this.props.source !== "undefined" ?
      this.props.source :
      this.props.children;

    return <div>{MTRC(content).tree}</div>;
  }
}

Markdown.propTypes = {
  children: React.PropTypes.node,
  source: React.PropTypes.string
}
