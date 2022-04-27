import * as C from './style'

export const MovieCategoryLine = ({title, items}) => {

    return (
        <C.Container>
            <h2>{title}</h2>
            <div className='movieRow--listArea'>
                <div className='list--row'>
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