import ProjectForm from './components/ProjectForm';
import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
import ProjectContainer from './components/Projects/ProjectContainer';
import Layout from './components/Layout/Layout';
import MenuOpen from './components/MenuOpen/MenuOpen';
function App() {
  return (
    <>
      <ProjectContainer />
      <Header />
      <ProjectForm />
      {/* <MenuOpen /> */}
    </>
  );
}

export default App;
