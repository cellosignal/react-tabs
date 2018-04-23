![React Accessible Tabs by Signal](images/readme-header.jpg)

**Project to be moved to GitHub**

| Maintained by |
|---------------|
| Jamie Halvorson |

Declaritive, accessible tabs in React that collapse into accordions on mobile.

This component uses the Context API, therefore there is a minimum requirement of **React 16.3**.

## Example

![Desktop vs Mobile example](images/example.jpg)

### Usage

```javascript
export default function myComponent() {
  return (
    <Tabs>
      <Tab title="Tab One">
        <h1>Ain't this tidy?</h1>
        <p>I'm more text</p>
      </Tab>
      <Tab>
        <SomeOtherComponent  />
      </Tab>
    <Tabs>
  );
}
```

## Development

We use storybook for component development, to get up and running follow these steps:

1. Clone the repository, `cd` into the root and run `npm install`
2. In the root run `npm run dev`
3. Open a new tab in your terminal, `cd` into the project and run `npm run storybook`


## Contributing

Please see the [contrubting guidlines](CONTRIBUTING.md).
