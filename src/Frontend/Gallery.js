import React from 'react';
import TvShows from './Tv_shows';
import getGallery from './gallery-get'

function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(tvshows => (
            <TvShows
              key={tvshows.id}
              id={tvshows.id}
              name={tvshows.name} 
              cover={tvshows.cover} />
          ))
        }      
      </div>
    </div>     
  );
}

  
  export default Gallery;