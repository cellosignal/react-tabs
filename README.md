![React Accessible Tabs by Signal](images/readme-header.jpg)

**Project to be moved to GitHub**

| Maintained by   |
|-----------------|
| Jamie Halvorson |

Declaritive, accessible tabs in React that collapse into accordions on mobile.

This component uses the Context API, therefore there is a minimum requirement of **React 16.3**.

## Example

![Desktop vs Mobile example](images/example.jpg)

## Usage

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

## API
There are a number of options available for targeting styles and providing data to the components.

| Prop | Component | Description |
|------|-----------|-------------|
| `className` | `<Tabs>` | Add your classNames for styling, this adds it at the **top** level |
| `contentClassName` | `<Tabs>` | className for wrapping your content |
| `className` | `<Tab>` | className to add to **each** tab |
| `activeClassName` | `<Tab>` | className added to the active tab |
| `title` | `<Tab>` | *String*, the title of the Tab |
| `toggleClassName` | `<Tabs>` | className added to the button, only on **mobile** |
| `mobileBreakpoint` | `<Tabs>` | Mobile breakpoint in `px` |

## Development

We use storybook for component development, to get up and running follow these steps:

- 1\. Clone the repository, `cd` into the root and run `npm install`
- 2\. Open two terminal windows, in the first window:
- 3\. cd into the root of the project run `npm run dev`, this will start webpack
- 4\. In the second window, `cd` into the project and run `npm run storybook`
- 5\. If you have a project that you are developing locally you should `npm link` this package, to do this you need to: 
  - 5.1\. In your terminal, `cd` into this project and run `npm link`
  - 5.2\. In your terminal, `cd` into your **application** and run `npm link @cellosignal/react-tabs`

## Contributing

Please see the [contrubting guidlines](CONTRIBUTING.md).
