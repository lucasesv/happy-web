import React, { useEffect, useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';
import '../styles/pages/orphanages-map.css';

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number
}

const initialMapPosition = {
  latitude: -5.7966366,
  longitude: -35.2038551,
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h1>Escolha um orfanato no mapa</h1>
          <p>Escolha um orfanato no mapa</p>
        </header>

        <footer>
          <strong>Natal</strong>
          <span>Rio Garnde do Norte</span>
        </footer>
      </aside>

      <Map
        center={[initialMapPosition.latitude, initialMapPosition.longitude]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="map-popup"
              >
                {orphanage.name}
              </Popup>
            </Marker>
          );
        })}
            
      </Map>
    </div>
  );
}

export default OrphanagesMap;