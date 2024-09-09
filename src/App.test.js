import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // Atualize o texto esperado conforme o conteúdo atual do componente
  const linkElement = screen.getByText(/Seja bem-vindo!/i); // ou o texto correto
  expect(linkElement).toBeInTheDocument();
});
