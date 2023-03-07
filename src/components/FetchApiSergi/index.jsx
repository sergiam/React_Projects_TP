import React, { useState, useEffect } from 'react';
import '../Hubs/HubSergi/styles.css'
import { getData  } from '../../services/index';

function FetchApiSergi() {
  const [data, setData] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(null);

  //https://stackoverflow.com/questions/73942677/fetch-data-from-api-but-the-id-comes-with-hyphen

  useEffect(() => {
    getData('https://universe-meeps.leagueoflegends.com/v1/es_es/champion-browse/index.json')
      .then(data => {
        setData(data)
        setErrorState(null);
      })
      .catch(error => {
        setErrorState(error.message)
        setData(null);
      })
      .finally(() => {
        setLoadingState(false);
      })
  }, []);

  return (
    <div id='champion-results'>
      {loadingState && <div> The content is loading, please wait...</div>}
      {errorState && (
        <div>{`There is a problem fetching the post data - ${errorState}`}</div>
      )}
      {data && data.champions.map(champion => (
        <div key={champion.slug}>
          <h2>{champion.name}</h2>
          <img src={`${champion.image.uri}`} id='image-champion' alt={champion.name} />
          <p><strong>Release Date:</strong> {champion["release-date"]}</p>
          <p><strong>Faction:</strong> {champion["associated-faction-slug"]}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchApiSergi;
