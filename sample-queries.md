# Sample GraphQL Queries

- What are all the Objects in this CloudLib?

```query ListObjectTypes {
  objecttypes {
    browsename,
    uri
  }
}
```

- What if we want to know what AddressSpace this exists in?

```
query FindAddressSpaceForBrowsename {
  uriForBrowsename(browsename: "MachineToolIdentificationType") {
    uri
  }
}
```

- What if we want to know what else is in this AddressSpace?

```
query ObjectTypesInAddressSpace {
  addressSpaceByURI(uri: "http://opcfoundation.org/UA/MachineTool") {
    browsename
    uri
      childnodes {
        description
      }
    }
}
```

- What if we want the NodeSet file (until we have a JSON serialization)

```
query GetNamespaceDownloadLink {
  namespaces(uri: "http://opcfoundation.org/UA/MachineTool") {
    download
  }
}
```

- What if we want *all* AddressSpaces...

```
query GetAllAddressSpaces {
  namespaces {
    uri
    download
    objecttypes {
      browsename
      description
    }
  }
}
```

- What if we want to include the ChildNodes in every AddressSpace (that is, follow the graph deeper)

```
query GetAllAddressSpaces {
  namespaces {
    uri
    download
    objecttypes {
      browsename
      description
      childnodes {
        browsename
      }
    }
  }
}
```