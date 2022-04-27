import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Api } from './api';
import { MovieCategoryLine } from './components/MovieCategoryLine' 
import { FeatureMovie } from './components/FeatureMovie'

function App() {

  const [listMovies, setListMovies] = useState([])
  const [featureData, setFeatureData] = useState(null)

  useEffect(()=> {
    const loadAll = async () => {
      let list = await Api.getAllMovies(); 
      setListMovies(list)

      let originals = list.filter(i => i.slug === 'original')
      let randomChoice = Math.floor(Math.random() * originals[0].item.results.length - 1)
      let chosen = originals[0].item.results[randomChoice]
      let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')
      setFeatureData(chosenInfo)
    }
    loadAll()
  }, [])

  return (
    <div className='HomePage'>

      {featureData &&
        <FeatureMovie />
      }
      <section className='lists'>
        {listMovies.map((item, key)=>(
          <MovieCategoryLine key={key} title={item.title} items={item.item}/>
        ))}
      </section>
    </div>
  );
}

export default App;
