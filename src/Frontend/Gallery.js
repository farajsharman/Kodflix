import React, {useEffect,useState} from 'react';
import TvShows from './Tv_shows';
// import getGallery from './gallery-get'
// export default class Gallery extends React.Component {

  
function Gallery() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch('/rest/shows')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            setGallery(myJson)
        });
  });

  return (
    <div>
      <div className='container'>
        {
          gallery.map(tvshows => (
            
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