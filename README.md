
# @swapneshio/stickyheader

A simple and reusable React component that renders its children within a sticky header with predefined CSS and JavaScript.

## Installation

You can install the package using npm, yarn, or pnpm:

```bash
npm install @swapneshio/stickyheader
```
<button onclick="navigator.clipboard.writeText('npm install @swapneshio/stickyheader')"></button>

```bash
yarn add @swapneshio/stickyheader
```
<button onclick="navigator.clipboard.writeText('yarn add @swapneshio/stickyheader')"></button>

```bash
pnpm add @swapneshio/stickyheader
```
<button onclick="navigator.clipboard.writeText('pnpm add @swapneshio/stickyheader')"></button>

## CDN Usage

You can include the `@swapneshio/stickyheader` package directly from jsDelivr using the following link:

```html
https://cdn.jsdelivr.net/npm/@swapneshio/stickyheader@latest/dist/index.js
```
OR
```html
<script src="https://cdn.jsdelivr.net/npm/@swapneshio/stickyheader@latest/dist/index.js"></script>
```
## Usage

Wrap your header or navigation component within the `StickyHeader` component to make it sticky.

```jsx
import React from 'react';
import StickyHeader from '@swapneshio/stickyheader';
import HeaderComponent from './HeaderComponent'; // Import your header component

const App = () => {
  const styles = {
    // Your custom styles here
  };

  return (
    <StickyHeader>
      <HeaderComponent style={styles} className="classnames">
        {/* Your header content */}
      </HeaderComponent>
    </StickyHeader>
  );
};

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
