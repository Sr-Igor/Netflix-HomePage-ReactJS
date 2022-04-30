import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Api } from './api';
import { MovieCategoryLine } from './components/MovieCategoryLine' 
import { FeatureMovie } from './components/FeatureMovie'
import { Header } from './components/Header';

function App() {

  const [listMovies, setListMovies] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [headerBlack, setHeaderBlack] = useState(false)

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
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
        if(window.scrollY > 10) {
          setHeaderBlack(true)
        }else {
          setHeaderBlack(false)
        }
    }

    window.addEventListener("scroll" , scrollListener)

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [])

  return (
    <div className='HomePage'>

      <Header black={headerBlack}/>

      {featureData &&
        <FeatureMovie item={featureData}/>
      }
      <section className='lists'>
        {listMovies.map((item, key)=>(
          <MovieCategoryLine key={key} title={item.title} items={item.item}/>
        ))}
      </section>

      <footer>
        <span>Feito por Igor de Sousa</span>
        <br />
        <span>Direitos de imagem para Netflix</span>
        <br />
        <span>Dados fornecidos por TMDB.org</span>
      </footer>
      {listMovies.length <= 0 &&
        <div className='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando'/>
        </div>
      }

    </div>
  );
}

export default App;
