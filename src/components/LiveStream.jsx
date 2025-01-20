import React, { useState } from 'react';
import YouTube from 'react-youtube'; // For embedding YouTube videos
import './LiveStream.css';

// Import images directly
import livestream1 from '/src/assets/livestream1.png';
import livestream2 from '/src/assets/livestream2.png';
import livestream3 from '/src/assets/livestream3.png';
import livestream4 from '/src/assets/livestream4.png';
import livestream5 from '/src/assets/livestream5.png';

const LiveStream = () => {
  // Define categories and their respective data
  const categories = {
    All: [
      { id: 1, title: 'How To Growth Your Business', author: 'Frank Smith', image: livestream1, videoId: 'dQw4w9WgXcQ' },
      { id: 2, title: 'How To Fit Your Health', author: 'Jay Webster', image: livestream2, videoId: '3JZ_D3ELwOQ' },
      { id: 3, title: 'How To Gain Knowledge', author: 'Taylor Parkes', image: livestream3, videoId: 'mPZkdNFkNps' },
      { id: 4, title: 'Inspiring Your Life Change', author: 'Ella Sims', image: livestream4, videoId: '5qap5aO4i9A' },
      { id: 5, title: 'Simple Steps to Success', author: 'Rachel Goodwin', image: livestream5, videoId: 'kJQP7kiw5Fk' },
    ],
    Business: [
      { id: 1, title: 'How To Growth Your Business', author: 'Frank Smith', image: livestream1, videoId: 'dQw4w9WgXcQ' },
    ],
    'Life Coaching': [
      { id: 1, title: 'Inspiring Your Life Change', author: 'Ella Sims', image: livestream4, videoId: '5qap5aO4i9A' },
    ],
    Events: [
      { id: 1, title: 'Simple Steps to Success', author: 'Rachel Goodwin', image: livestream5, videoId: 'kJQP7kiw5Fk' },
    ],
    Health: [
      { id: 1, title: 'How To Fit Your Health', author: 'Jay Webster', image: livestream2, videoId: '3JZ_D3ELwOQ' },
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
        <div className="modal1" onClick={closeModal}>
          <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
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
