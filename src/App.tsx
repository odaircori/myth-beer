import './styles/theme.css';
import './styles/global.css';

import { Container } from "./components/Container";
import { Menu } from "./components/Menu";

export function App() {
  return (
    <>
      <Container>
        <Menu />
      </Container>
    </>
  );
}
