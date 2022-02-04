
interface IHeaderProps{

}

const Header: React.FunctionComponent<IHeaderProps> = () => {

    return(
        <header>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes 
                <span className="text-indigo-600 ml"> Veterinaria </span> 
            </h1>
        </header>
    );

}

export default Header;