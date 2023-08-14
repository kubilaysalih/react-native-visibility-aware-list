# react-native-visibility-aware-list

<p align="center">
  <img src="https://imgur.com/u94Pa4T.gif" />
</p>

This React Native component, VisibilityAwareFlatList, is a custom implementation of the standard FlatList component. It is designed to provide awareness of the visibility of individual items within the list, allowing developers to respond to changes in the viewport.

## Features

- **60 FPS Performance**: Designed to run smoothly at minimum 60 frames per second without any lag.
- **Visibility Tracking**: Know exactly what items are visible within the viewport.
- **Customizable Thresholds**: Set your own percentage threshold for triggering visibility changes.
- **Nested Viewport Support**: Handle nested viewports easily with the context-based architecture.
- **Extendable**: Can be used with your custom `FlatList` implementation.


## Installation

```sh
yarn add install react-native-visibility-aware-list
```
## Usage
Here's a simple example to get you started:

```javascript
import VisibilityAwareFlatList from 'path-to-component';

// Usage in your component
<VisibilityAwareFlatList
  onViewportItemsChanged={(items) => console.log(items)}
  viewportItemsChangePercentage={0.5}
  // other FlatList props
/>
```

## API

### Props

- `onViewportItemsChanged(items: VisibleItem[])`: Callback that gets called when the visible items change.
- `viewportItemsChangePercentage?: number`: Minimum percentage of an item that must be visible to trigger `onViewportItemsChanged`.
- `triggerOnLayoutChange?: boolean`: Trigger calculation on layout change.
- `nestedViewportKey?: string`: Key for nested viewport.
- `as?: any`: Custom component that will replace FlatList(must have cell renderer).

### Methods
`getCurrentVisibleItems(): VisibleItem[]`: You can get current visible items via refs.


## Contributing

This project is open-source and awaits your contributions. Feel free to make changes and send a pull request.

## License

This project is licensed under the MIT license. For more details, see the `LICENSE` file.

---

[![README Created with ChatGPT](https://img.shields.io/badge/README%20Created%20with-ChatGPT-blue.svg)](https://openai.com)