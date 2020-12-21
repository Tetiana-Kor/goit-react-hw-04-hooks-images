import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleNameChange = event => {
    setImageName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Please, enter something!');
      return;
    }

    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>
            {/* <ImSearch style={{ marginRight: 8 }} /> */}
          </span>
        </button>
        <input
          type="text"
          name="imageName"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className={s.SearchFormInput}
          value={imageName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
