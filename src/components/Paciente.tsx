import { Ipaciente } from "../interfaces/pacientes";

interface IpacienteProps{
    paciente: Ipaciente
    setPaciente: React.Dispatch<React.SetStateAction<Ipaciente>>;
    handleDeletepaciente: ( id: string ) => void;
}

const Paciente: React.FunctionComponent<IpacienteProps> = ( { paciente, setPaciente, handleDeletepaciente } ) => {

    const { namemascota,namepropietario, email, alta, sintomas,id } = paciente;


    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: { ' ' }
                <span className="font-normal normal-case"> { namemascota } </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: { ' ' }
                <span className="font-normal normal-case"> { namepropietario }  </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: { ' ' }
                <span className="font-normal normal-case"> { email } </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: { ' ' }
                <span className="font-normal normal-case"> { alta } </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: { ' ' }
                <span className="font-normal normal-case"> 
                    { sintomas }
                </span>
            </p>


            <div className=" mt-10 flex justify-between">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
                    onClick={ () => setPaciente( paciente ) }
                >
                    Editar
                </button>

                <button
                    type="button"
                    className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded "
                    onClick={ () => handleDeletepaciente( id ) }
                >
                    Eliminar
                </button>

            </div>

        </div>
    );
}

export default Paciente;