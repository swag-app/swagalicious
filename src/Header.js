const Header = () => {

    login = () => {
        alert('please login')
    }

    return <div>
        I'm a header
        <button onClick={login}>Login</button>
    </div>
}

export default Header