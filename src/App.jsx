import React from 'react';

const simpleImages = import.meta.glob('/public/images/simple/*.{png,jpg,jpeg}', { eager: true });
const intermediateImages = import.meta.glob('/public/images/intermediate/*.{png,jpg,jpeg}', { eager: true });
const complexImages = import.meta.glob('/public/images/complex/*.{png,jpg,jpeg}', { eager: true });

const getPaths = (modules) => 
  Object.keys(modules).map((path) => ({
    path: path.replace('/public', ''),
    name: path.split('/').pop()
  }));

function App() {
  const categories = {
    simple: getPaths(simpleImages),
    intermediate: getPaths(intermediateImages),
    complex: getPaths(complexImages),
  };

  return (
    <div>
      {Object.entries(categories).map(([category, images]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {images.map((img) => (
              <div key={img.path}>
                <img src={img.path} alt={img.name} width="120" height="120" />
                <span>{img.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;