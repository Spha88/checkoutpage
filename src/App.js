import React from 'react';
import { Container } from './components/UI/Container/Container';
import classes from './App.module.scss';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Container>
      <header className={classes.Header}>
        <h1>Checkout Page</h1>
      </header>
      <main className={classes.Main}>
        <div className={classes.FormContainer}>
          <Form />
        </div>
        <div className={classes.CartContainer}>
          <Cart />
        </div>
      </main>
    </Container>
  );
}

export default App;
