import React from "react/addons";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import styles from '../themes/metalab/index';
// import Interactive from "./interactive";

const images = {
  metalab: require("./images/metalab.png"),
  graphql: require("./images/graphql.svg"),
  netscape: require("./images/netscape.png"),
  restfulFlow: require("./images/restful-flow.png"),
  graphqlFlow: require("./images/graphql-flow.png"),
  shape: require("./images/gql-shape.png"),
  yupItsAGraph: require("./images/a-graph.png")
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

const restful = `
  CRUD /:resource/:identifier

  GET /tasks
  GET /users/me

  POST /tasks
  PUT /messages/123

  DELETE /competitors
  DELETE /article/last-exit-to-springfield
`;

const customEndpoint = `
/* ex. GET /tasks/1
 *
 * - includes all data required to render the view
 * - given a clients requirements may return too much or too little data
 * - leads to lots of churn as client requirements change & new features added
 */

{
  "task": {
    "text": "You tried your best and you failed miserably. The lesson is, never try.",
    ...,
    "creator": {
      "id": "abc",
      "name": "James",
      ...
    }
    "activities": [
      ...
    ]
  }
}
`;

const exGraphQuery = `
query FetchTasks {
  tasks(id: 57) {

    title
    due_on

    activities {
      text
      actor {
        name
        avatar
      }
    }

    # so on..
  }
}
`;

const exampleFrag= `
fragment userDetails on User {
  name
  nickname
  online
  channels {
    name
  }
}
`;

const exampleMutation= `
mutation UpdateTask {
  updateTask(completed: true) {
    task {
      completed
    }
    activity {
      id
      title
      payload {
        # ...
      }
    }
  }
}
`;

const exampleSubscription= `
subscription ExmapleSubscription {
  taskCompleted(ID: "123") {
    task { completed }
    activity { id, title }
  }
}
`;

const exampleLive= `
query LiveQuery {
  @live
  task(id: "15") {
    title 
    completed
    tags
    subscribers {
      # ...
    }
  }
}
`;

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={200}>

        <Slide>
          <Heading size={1} fit>GraphQL</Heading>
          <Text>[🍕 & 🤓] Nov. 15'</Text>
        </Slide>

        <Slide>
          <Heading size={1}>REST</Heading>
          <Text>A monument to all our sins.</Text>
        </Slide>

        <Slide>
          <List>
            <ListItem>Request a single resource or collection of resources.</ListItem>
            <ListItem>Very simple.</ListItem>
          </List>
          <CodePane lang="bash" source={restful} />
        </Slide>

        <Slide>
          <Image src={images.netscape} height="30vw" />
        </Slide>

        <Slide>
          <Image src={images.restfulFlow} height="35vw" fit/>
        </Slide>

        <Slide>
          <Image src={images.yupItsAGraph} height="35vw" fit/>
        </Slide>

        <Slide>
          <List>
            <ListItem>Want to avoid second, third hop to fetch data.</ListItem>
            <ListItem>Each client has different data requirements.</ListItem>
            <ListItem>This leads us to complex endpoints.</ListItem>
          </List>
          <CodePane lang="javascript" source={customEndpoint} />
        </Slide>

        <Slide>
          <Heading size={1} style={{"font-size": "300px"}}>💩 </Heading>
        </Slide>

        <Slide>
          <Image src={images.graphql} height="300px" />
          <Heading size={1} fit>GraphQL</Heading>
          <Text>Its divine wind will rush through the stars.</Text>
        </Slide>

        <Slide>
          <Heading size={4}>Wat is it?</Heading>
          <List>
            <ListItem>Product-centric query language</ListItem>
            <ListItem>Declaritively request data from the server</ListItem>
            <ListItem>Trivializes fetching dependencies</ListItem>
            <ListItem>Legible syntax</ListItem>
          </List>
          {/*<CodePane lang="json" source={exGraphQuery} />*/}
        </Slide>

        <Slide>
          <Heading size={4}>Wat does it look like</Heading>
          <List>
            <ListItem>Similar to Map syntax in many languages</ListItem>
            <ListItem>Response matches the shape of the request</ListItem>
            <ListItem>Hierarchical</ListItem>
          </List>
          <Image src={images.shape} height="20vw"/>
        </Slide>

        <Slide>
          <Heading size={4}>A Schema?!</Heading>
          <List>
            <ListItem>Introspection</ListItem>
            <ListItem>Strongly-typed</ListItem>
            <ListItem>Useful in statically typed languages</ListItem>
            <ListItem>Built-in documentation</ListItem>
            <ListItem>Version-free</ListItem>
          </List>
        </Slide>

        {/*
        <Slide>
          <Image src={images.graphqlFlow} height="35vw" />
        </Slide>
        */}

        <Slide>
          <Heading size={1}>Demo</Heading>
        </Slide>

        <Slide>
          <Heading size={4}>Fragments</Heading>
          <List>
            <ListItem>Composable query 'fragments'</ListItem>
            <ListItem>Build query from fragments</ListItem>
            <ListItem>Typically views declare a fragment</ListItem>
          </List>
          <CodePane lang="json" source={exampleFrag}/>
        </Slide>

        <Slide>
          <Heading size={4}>Mutations</Heading>
          <List>
            <ListItem>Oparation to manipulate remote state</ListItem>
            <ListItem>Declaratively fetch data from response</ListItem>
            <ListItem>So called 'fat queries' to fetch any side-effects</ListItem>
          </List>
          <CodePane lang="json" source={exampleMutation}/>
        </Slide>

        <Slide>
          <Heading size={4}>Subscriptions</Heading>
          <List>
            <ListItem>Oparation to subscribe to realtime updates</ListItem>
            <ListItem>Very similar to mutations</ListItem>
            <ListItem>Declaratively fetch data from payload</ListItem>
            <ListItem><Link>https://github.com/facebook/graphql/pull/109</Link></ListItem>
            <ListItem><Link>https://github.com/facebook/relay/issues/541</Link></ListItem>
          </List>
          <CodePane lang="json" source={exampleSubscription}/>
        </Slide>

        <Slide>
          <Heading size={4}>Live Queries</Heading>
          <List>
            <ListItem>RFC for @live directive</ListItem>
            <ListItem>Define queries that change over time</ListItem>
            <ListItem>Possible with: Datomic, RethinkDB, others.</ListItem>
            <ListItem><Link>https://github.com/graphql/graphql/issues/188</Link></ListItem>
          </List>
          <CodePane lang="json" source={exampleLive}/>
        </Slide>

        <Slide>
          <Heading size={1} fit>Thanks!</Heading>
        </Slide>


      </Deck>
    );
  }
}
