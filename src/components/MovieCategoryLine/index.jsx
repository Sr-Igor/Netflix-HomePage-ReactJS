import { useState } from 'react'
import * as C from './style'

export const MovieCategoryLine = ({title, items}) => {

    const [scrollX, setScrollX] = useState(0)

    const handleLeftArea = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const haldeRightArea = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }

    return (
        <C.Container>
            <h2>{title}</h2>
            <div className='movieArrow-left' onClick={handleLeftArea}>
                {"<"}
            </div>

            <div className='movieArrow-right' onClick={haldeRightArea}>
                {">"}
            </div>

            <div className='movieRow--listArea'>
                <div className='list--row'  style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div className='list--item' key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </C.Container>
    )
}