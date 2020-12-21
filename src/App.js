import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar';
import ImageGalleryInfo from './component/ImageGalleryInfo';
import Container from './component/Container';
import './App.css';

export default function App() {
  const [imageName, setImageName] = useState('');

  return (
    <Container>
      <Searchbar onSubmit={setImageName} />
      <ImageGalleryInfo imageName={imageName} />

      <ToastContainer autoClose={3000} />
    </Container>
  );
}
