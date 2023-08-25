import React, { useState } from 'react';

function SourceFilter({ sources, onSourceFilter }) {
  const [selectedSources, setSelectedSources] = useState([]);

  const handleSourceChange = source => {
    const updatedSelectedSources = selectedSources.includes(source)
      ? selectedSources.filter(s => s !== source)
      : [...selectedSources, source];
    
    setSelectedSources(updatedSelectedSources);
    onSourceFilter(updatedSelectedSources);
  };

  return (
    <div>
      {sources.map(source => (
        <label key={source}>
          <input
            type="checkbox"
            checked={selectedSources.includes(source)}
            onChange={() => handleSourceChange(source)}
          />
          {source}
        </label>
      ))}
    </div>
  );
}

export default SourceFilter;
