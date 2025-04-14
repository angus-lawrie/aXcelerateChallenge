```
# SearchField Component

A reusable, documented, and tested React SearchField component built with Styled Components and Storybook.

## 🛠 Installation

```bash
npm install
```

## 🚀 Running the Project

```bash
npm start
```

## 🧪 Running Tests

```bash
npm test
```

## 📚 View Storybook

```bash
npm run storybook
```

This opens Storybook in your browser for interactive component testing.

## 📦 Usage

```javascript
import { SearchField } from './components/SearchField/SearchField';

<SearchField
  users={usersArray}
  emailCheck={true}
  width="500px"
/>
```

## Props

| Prop        | Type      | Description                        |
|-------------|-----------|------------------------------------|
| `users`     | `User[]`  | Array of user objects              |
| `emailCheck`| `boolean` | If true, show user email           |
| `width`     | `string`  | Optional width of the component container |
```