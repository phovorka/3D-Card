import React, { useState } from 'react';
import '@google/model-viewer';

const ModelViewer = ({
  src,
  alt,
  autoRotate = true,
  cameraControls = true,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const modelViewer = document.querySelector('model-viewer');

    if (!isFullscreen) {
      // Vstoupit do fullscreen
      if (modelViewer?.requestFullscreen) {
        modelViewer.requestFullscreen();
        setIsFullscreen(true);
      } else {
        alert('Fullscreen není podporován ve vašem prohlížeči.');
      }
    } else {
      // Opustit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };
  return (
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      style={{ width: '100%', height: '500px' }}
      ar
      quick-look
      enable-pan="true"
      shadow-intensity="1"
      environment-image="neutral"
    >
      <div>
        {/* Progress Bar */}
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        {/* Fullscreen Toggle Button */}
        <button onClick={toggleFullscreen} id="fullscreen-button">
          {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
        {/* AR Prompt */}
        <div id="ar-prompt"></div>
      </div>
    </model-viewer>
  );
};

export default ModelViewer;
