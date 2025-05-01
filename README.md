# React/stickyheader

A simple and reusable React component that renders its children within a sticky header with predefined CSS and JavaScript.

## Installation

You can install the package using npm, yarn, or pnpm:

```bash
npm install @swapneshdeete/react-sticky-header
```

<button onclick="navigator.clipboard.writeText('npm install @swapneshdeete/react-sticky-header')"></button>

```bash
yarn add @swapneshdeete/react-sticky-header
```

<button onclick="navigator.clipboard.writeText('yarn add @swapneshdeete/react-sticky-header')"></button>

```bash
pnpm add @swapneshdeete/react-sticky-header
```

<button onclick="navigator.clipboard.writeText('pnpm add @swapneshdeete/react-sticky-header')"></button>

Wrap your header or navigation component within the `StickyHeader` component to make it sticky.

```jsx
import React from "react";
import StickyHeader from "@swapneshdeete/react-sticky-header";
import HeaderComponent from "./HeaderComponent"; // Import your header component

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
