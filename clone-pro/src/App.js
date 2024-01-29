import './App.css';
import Topbar from './components/Topnav';
import TOC from './components/Toc';
import MapComponent from './components/OpenMap';
import { useState } from 'react';

function App() {
  const [selectedLayers, setSelectedLayers] = useState([])
  const groups = [
    {
      title: 'Basemaps',
      layers: [
        { name: 'OpenStreetMap', checked: true },
        { name: 'Stamen Terrain', checked: false },
      ],
    },
    {
      title: 'Overlays',
      layers: [
        { name: 'Points of Interest', checked: false },
        { name: 'Transportation Network', checked: false },
      ],
    },
  ];
  const handleLayerSelect = (layer) => {
    setSelectedLayers((prev) => [...prev, layer])
  }
  return (
    <div className="app">
      <Topbar />
      <div className="mapRow">
      <MapComponent selectedLayers={selectedLayers} />
      </div>
      <TOC groups={groups} onLayerSelect={handleLayerSelect} />
      
    </div>
  );
}

export default App;
