import * as C from './style'

export const Header = ({black}) => {
    return (
        <C.Container>
            <section className={black ? 'black' : ''}>
                <div className='header-logo'>
                        <a href="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logoNetflix" />
                        </a>
                    </div>
                    <div className='header-user'>
                        <a href="/">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
                        </a>
                    </div>
            </section>
        </C.Container>
    )
}