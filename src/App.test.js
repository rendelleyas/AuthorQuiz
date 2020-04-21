import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import Enzyme, {mount, shallow} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter()});

// const state = {
//   //pass to a function
//   turnData: {
//     books: ['The shining', 'IT', 'David Copperfield', 'A tale of Two Cities', 'Hamlet', 
//       'Macbeth', 
//       'Romeo and Juliet',
//       'The Adventure of Huckleberry Finn',
//       'Life on the Mississipi',
//       'Roughing'],
//     author : {
//       name: 'Charles Dickens',
//       imageUrl: require('./images/authors/charlesdickens.png'),
//       imageSource: 'Wikimedia Commons',
//       books: ['David Copperfield', 'A tale of Two Cities']
//     },
//   },
//   highlight: 'none'
// };

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
