// import '@testing-library/jest-dom';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store from './app/store';
// import App from './App';

// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

// describe('index.js', () => {
//   it('should render main page', () => {
//     render(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//     );

//     expect(
//       screen.getByAltText(/^[A-Za-z]+\s[A-Za-z]+\savatar$/),
//     ).toBeInTheDocument();
//     expect(
//       screen.getByText('Lorem ipsum dolor sit amet', { exact: false }),
//     ).toBeInTheDocument();
//     expect(screen.getByText('Know more')).toBeInTheDocument();
//   });
// });
