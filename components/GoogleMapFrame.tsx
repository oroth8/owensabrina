import { useLoadScript, GoogleMap, MarkerF} from '@react-google-maps/api';
import { useMemo } from 'react';


const GoogleMapFrame = () => {

  const mapCenter = useMemo(
    () => ({ lat: 41.886851537993685, lng: -87.62001572794577 }),
    []
  );
  

    const libraries = useMemo(() => ['places'], []);


  const aquaHotel = useMemo(
    () => ({ lat: 41.886851537993685, lng: -87.62001572794577 }),
    []
  );

  const stRegisHotel = useMemo(
    () => ({ lat: 41.88748266340568, lng: -87.61732691075312 }),
    []
  );

  const cindysRoofTop = useMemo(
    () => ({ lat: 41.88181376971518, lng: -87.62463580625564 }),
    []
  ); 

  const theGeraghty = useMemo(
    () => ({ lat: 41.84586341870155, lng: -87.67809876102689}),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={12}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '100%', position: 'absolute' }}
        onLoad={() => console.log('Google Map Component Loaded...')}
      >
      <MarkerF position={aquaHotel} label={"Aqua Hotel"} title={"Aqua Hotel"} />
      <MarkerF position={stRegisHotel} label={"St. Regis Hotel"} title={"St. Regis Hotel"} />
      <MarkerF position={cindysRoofTop} label={"Cindy's Rooftop"} title={"Cindy's Rooftop"} />
      <MarkerF position={theGeraghty} label={"The Geraghty"} title={"The Geraghty"} />
        
      </GoogleMap>

    </div>
  );
};

export default GoogleMapFrame;