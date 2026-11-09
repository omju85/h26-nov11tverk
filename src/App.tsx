import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItems";

function App() {
  return (
    <>
      <main>
        <Header name="Kaffi Kóði" slogan="All is hood in the good" />
        <MenuItem
          emoji="🥐"
          name="Latte"
          description="Espresso með flóaðri mjólk"
          price={690}
        />
        <MenuItem
          name="A Cup of Chino"
          description="Svona kerlinarkaffi"
          price={16.69}
        />
        <MenuItem
          name="Kaffi. Svart"
          isVegan
          description="Morgunolía"
          price={190}
        />
      </main>
    </>
  );
}

export default App;
