
# @swapnesh.io/stickyheader

A simple and reusable React component that renders its children within a sticky header with predefined CSS and JavaScript.

## Installation

You can install the package using npm, yarn, or pnpm:

```bash
# Using npm
npm install @swapnesh.io/stickyheader

# Using yarn
yarn add @swapnesh.io/stickyheader

# Using pnpm
pnpm add @swapnesh.io/stickyheader
```

## Usage

Wrap your header or navigation component within the `StickyHeader` component to make it sticky on scroll.

```jsx
import React from 'react';
import StickyHeader from '@swapnesh.io/stickyheader';
import HeaderComponent from './HeaderComponent'; // Import your header component

const App = () => {
  const styles = {
    // Add any custom styles here, if needed
  };

  return (
    <StickyHeader>
      <HeaderComponent style={styles} className="classnames">
        {/* Your header content goes here */}
      </HeaderComponent>
    </StickyHeader>
  );
};

export default App;
```

### Props

The `StickyHeader` component accepts the following props:

| Prop        | Type       | Description                                           |
|-------------|------------|-------------------------------------------------------|
| `children`  | `ReactNode`| The content that will be rendered inside the sticky header.|

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
