import React, { useState } from 'react';
import YouTube from 'react-youtube'; // For embedding YouTube videos
import './LiveStream.css';

const LiveStream = () => {
  // Define categories and their respective data
  const categories = {
    All: [
      { id: 1, title: 'How To Growth Your Business', author: 'Frank Smith', image: '/src/assets/livestream1.png', videoId: 'dQw4w9WgXcQ' },
      { id: 2, title: 'How To Fit Your Health', author: 'Jay Webster', image: '/src/assets/livestream2.png', videoId: '3JZ_D3ELwOQ' },
      { id: 3, title: 'How To Gain Knowledge', author: 'Taylor Parkes', image: '/src/assets/livestream3.png', videoId: 'mPZkdNFkNps' },
      { id: 4, title: 'Inspiring Your Life Change', author: 'Ella Sims', image: '/src/assets/livestream4.png', videoId: '5qap5aO4i9A' },
      { id: 5, title: 'Simple Steps to Success', author: 'Rachel Goodwin', image: '/src/assets/livestream5.png', videoId: 'kJQP7kiw5Fk' },
    ],
    Business: [
      { id: 1, title: 'How To Growth Your Business', author: 'Frank Smith', image: '/src/assets/livestream1.png', videoId: 'dQw4w9WgXcQ' },
    ],
    'Life Coaching': [
      { id: 1, title: 'Inspiring Your Life Change', author: 'Ella Sims', image: '/src/assets/livestream4.png', videoId: '5qap5aO4i9A' },
    ],
    Events: [
      { id: 1, title: 'Simple Steps to Success', author: 'Rachel Goodwin', image: '/src/assets/livestream5.png', videoId: 'kJQP7kiw5Fk' },
    ],
    Health: [
      { id: 1, title: 'How To Fit Your Health', author: 'Jay Webster', image: '/src/assets/livestream2.png', videoId: '3JZ_D3ELwOQ' },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="live-stream">
      {/* Category Navigation */}
      <div className="category-nav">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`nav-item ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="stream-grid">
        {categories[activeCategory].map((item) => (
          <div className="stream-item" key={item.id} onClick={() => openModal(item.videoId)}>
            <img src={item.image} alt={item.title} className="stream-image" />
            <div className="stream-content">
              <h3>{item.title}</h3>
              <p>By: {item.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <YouTube
              videoId={selectedVideo}
              opts={{
                height: '360',
                width: '540',
                playerVars: { autoplay: 1 }, // Video autoplays when the modal opens
              }}
              className="youtube-video"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default LiveStream;
