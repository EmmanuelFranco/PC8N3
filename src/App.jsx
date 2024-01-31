// App.js
import './App.css';
import { useCatImage } from './hooks/useCatImage.js';
import { useCatFact } from './hooks/useCatFact.js';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1 className="app-title">App de gatitos</h1>

      <button className="custom-button" onClick={handleClick}>
        Get new fact
      </button>

      {fact && <p className="fact-text">{fact}</p>}
      {imageUrl && (
        <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} 
        className="rounded-image"/>
        
      )}
    </main>
  );
}
