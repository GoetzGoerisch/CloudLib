const { ApolloServer, gql } = require('apollo-server');
const myUAServer = require("./data");
var startupTime = new Date();

const namespaces = myUAServer.namespaces;   // OPC UA Namespaces in the "server"
const objecttypes = myUAServer.objecttypes;   // OPC UA ObjectTypes in the "server" that belong to a Namespace
const authors = myUAServer.authors;   // Library metadata about the publishers

// Schema definition
const typeDefs = gql`
# An OPC UA Namespace has a URI and ObjectTypes (and other things that aren't in here)
  type NameSpace {
    uri: String!
    objecttypes: [ObjectType!]
    author: String
    download: String
  }

  # A OPC UA ObjectType has a browsename, nodeid and description (among other things) and belongs to a namespace
  type ObjectType {
    browsename: String!
    nodeid: NodeId!,
    description: String,
    uri: String!,
    childnodes: [ObjectType]
  }

  # An OPC UA nodeid has a value and an idtype
  type NodeId {
    value: String!
    idtype: String
  }

  # Made up element for searching by creator
  type Author {
    id: ID!
    name: String
  }

  # Queries can fetch lists of things, we can have multiple queries
  type Query {
    sayHello: String,
    namespaces(uri: String): [NameSpace],
    objecttypes: [ObjectType],
    authors: [Author],
    author(id: ID!): Author,
    uriForBrowsename(browsename: String!): ObjectType,
    addressSpaceByURI(uri: String!): [ObjectType],
    downloadLinkForURI(uri: String!): [ObjectType]
  }
`;

// Resolver map
const resolvers = {
  Query: {
    sayHello() {
      var queryTime = new Date();
      return "Hello World! This CloudLib has been online for " + ((queryTime - startupTime) / 1000) + " seconds. It has " + namespaces.length + " namespaces, containing " + objecttypes.length + " object type definitions.";
    },
    namespaces(parent, args, context, info) {
      if (!args.uri)
        return namespaces;
      else
        return namespaces.filter(namespaces => namespaces.uri === args.uri)
    },
    objecttypes() {
      return objecttypes;
    },
    authors() {
      return authors;
    },
    author(parent, args, context, info) {
      return authors.find(author => author.id === args.id);
    },
    //TODO: find namespaces for a given author
    uriForBrowsename(parent, args, context, info) {
      return objecttypes.find(objecttype => objecttype.browsename === args.browsename); //use "find" to match exactly one
    },
    addressSpaceByURI(parent, args, context, info) {
      return objecttypes.filter(objecttype => objecttype.uri === args.uri); //use "filter" to get a list of matches (aka: iterable)
    }
  },
  NameSpace: {
    objecttypes(parent) {
      // Filter the hardcoded array of namespaces to only include
      // objecttypes that are located in the correct URI
      return objecttypes.filter(objecttype => objecttype.uri === parent.uri);
    }
  },
  ObjectType: {
    // The parent resolver (Namespaces.NodeId) returns an object with the
    // NodeId definition in it. Return a JSON object containing
    // the name, because this field expects an object.
    nodeid(parent) {
      return {
        value: parent.nodeid.value,
        idtype: parent.nodeid.idtype
      };
    }
  },

};

// Pass schema definition and resolvers to the
// ApolloServer constructor
const server = new ApolloServer({ typeDefs, resolvers });

// Launch the server
server.listen().then(({ url }) => {
  console.log(`🚀 CloudLib Prototype ready at ${url}`);
});