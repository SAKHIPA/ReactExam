import React from 'react';
import NavbarComponent from './components/NavbarComponent'; // Ensure the path is correct

import { Route, Routes } from 'react-router-dom';

import AutherComponent from './components/AutherComponent';
import CategoryComponent from './components/CategoryComponent';
import AddAutherComponent from './components/AddAutherComponent';
import AddCategoryComponent from './components/AddCategoryComponent';

const App = () => {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/auther' element={<AutherComponent />}></Route>
        <Route path='/category' element={<CategoryComponent />}></Route>
        <Route path='/addauther' element={<AddAutherComponent />}></Route>
        <Route path='/addcategory' element={<AddCategoryComponent />}></Route>


      </Routes>
    </div>
  );
}

export default App;
