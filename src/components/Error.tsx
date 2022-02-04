

interface Ierror {
    msg: string;
}

const Error: React.FunctionComponent<Ierror> = ({ msg }) => {


    return (
        <div className='bg-red-500 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
            <p> { msg } </p>
        </div>
    );
}

export default Error;