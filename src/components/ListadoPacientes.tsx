import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


import { Ipaciente } from "../interfaces/pacientes";
import Paciente from "./Paciente";


interface IlistadoPacientes{
    pacientes: Ipaciente[];
    setPaciente: React.Dispatch<React.SetStateAction<Ipaciente>>
    setPacientes: React.Dispatch<React.SetStateAction<Ipaciente[]>>
}

const ListadoPacientes: React.FunctionComponent<IlistadoPacientes> = ( { pacientes, setPaciente, setPacientes } ) => {

    
    const Myswal = withReactContent( Swal );

    const checkingLengthPacientes: () => boolean = () => pacientes.length > 0 ? true : false;

    const handleDeletePaciente = ( id: string ) => {
        let isDelete:boolean =  confirm('¿Estas seguro de eliminar este registro. ?');
        if( !isDelete ) return;

        const pacientesActualizados: Ipaciente[] = pacientes.filter( paciente => paciente.id !== id  );
        setPacientes(pacientesActualizados );

    } 


    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
           

            <h2 className="font-black  text-3xl text-center ">
                { checkingLengthPacientes() ? 'Listado de pacientes' : ' No hay pacientes' } 
            </h2>

            <p className="text-xl mt-5 mb-10 text-center font-bold">
                { checkingLengthPacientes() ? 'Administra tus ' : 'Comienza agregando pacientes ' }
                <span className="text-indigo-600">
                    { checkingLengthPacientes() ? 'Pacientes y Citas' : 'y apareceran en este lugar'  }
                </span>

            </p>

            {
                pacientes.map( (paciente) => <Paciente 
                                                paciente={ paciente }
                                                setPaciente={ setPaciente } 
                                                handleDeletepaciente={ handleDeletePaciente }
                                                key={paciente.id} 
                                            /> )
            }


        </div>
    );

}

export default ListadoPacientes;