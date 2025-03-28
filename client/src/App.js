import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <BrowserRouter> {/* Moved to top level */}
      <ThemeProvider theme={darkTheme}>
        <Container>
          <Wrapper>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post" element={<CreatePost />} />
            </Routes>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;