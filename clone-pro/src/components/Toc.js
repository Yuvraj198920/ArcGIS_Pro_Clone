import { useState } from "react";

function TOC({ groups, onLayerSelect }) {
    return (
      <div className="toc offcanvas offcanvas-end show">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Layers</h5>
        </div>
        <div className="offcanvas-body">
          {groups.map((group) => (
            <LayerGroup key={group.title} group={group} onLayerSelect={onLayerSelect} />
          ))}
        </div>
      </div>
    );
  }
  
  function LayerGroup({ group, onLayerSelect }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleGroup = () => setIsOpen(!isOpen);
  
    return (
      <div className="card mb-3">
        <div className="card-header">
          <h6 className="card-title mb-0">
            <button onClick={toggleGroup} className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target={`#${group.title}-collapse`}>
              {group.title}
            </button>
          </h6>
        </div>
        <div id={`#${group.title}-collapse`} className={`collapse ${isOpen ? 'show' : ''}`}>
          <ul className="list-group list-group-flush">
            {group.layers.map((layer) => (
              <LayerItem key={layer.name} layer={layer} onLayerSelect={onLayerSelect} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  function LayerItem({ layer, onLayerSelect }) {
    const { name, checked } = layer;
  
    const handleCheckboxChange = () => onLayerSelect(name);
  
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <label className="mb-0">
          <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
          {name}
        </label>
      </li>
    );
  }
  export default TOC