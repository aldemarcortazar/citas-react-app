import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { generateId } from '../helpers/generate-id';
import { Ipaciente } from '../interfaces/pacientes';
import Error from './Error';


interface IformularioProps{
    pacientes: Ipaciente[];
    setPacientes: React.Dispatch<React.SetStateAction<Ipaciente[]>>
    paciente: Ipaciente
    setPaciente: React.Dispatch<React.SetStateAction<Ipaciente>>
}





const Formulario: React.FunctionComponent<IformularioProps> = ( { setPacientes, pacientes, paciente, setPaciente } ) => {


    // const [ name, setName  ] = useState<string>('Hook');
    const initialForm: Ipaciente = {
        id:  '',
        namemascota: '',
        namepropietario: '',
        email: '',
        alta: '',
        sintomas: '',
    }
    const [ dataForm, setDataForm ] = useState<Ipaciente>( initialForm );

    const [ error, setError ] = useState<boolean>(false);


    useEffect(() => {

        if( !Object.values( paciente ).includes('') ) setDataForm(paciente);

    }, [paciente]);

    const handleInputChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) =>{  
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    }


    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log('enviando....');

        // validacion de formulario
        const { id, ...resto } = dataForm;
        if( Object.values( resto ).includes('') ){
            console.log( 'hay almenos un campo vacio' );
            setError(true);
            return ;
        }

        if( paciente.id ){
            const pacientesEdit: Ipaciente[] = pacientes.map( pacienteState => pacienteState.id === paciente.id 
                                                                                            ? dataForm
                                                                                            : pacienteState );
            setPacientes(pacientesEdit);
            setPaciente(initialForm);
        }else{
            setPacientes( [ ...pacientes, { ...dataForm, id: generateId() }  ] );
        }

        setError( false );
        setDataForm( initialForm );
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10 font-bold">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form 
                onSubmit={ handleSubmit }
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >

                { error && <Error msg='Todos los campos son obligatorios !!' /> }

                <div className="mb-5">
                    <label 
                        htmlFor="namemascota"
                        className="block text-gray-700 uppercase font-bold"
                    > 
                        Nombre Mascota 
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre de la mascota"
                        id="namemascota"
                        name="namemascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={ handleInputChange }
                        value={ dataForm.namemascota }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="namepropietario"
                        className="block text-gray-700 uppercase font-bold"
                    > 
                        Nombre Propietario 
                    </label>

                    <input 
                        type="text"
                        placeholder="Nombre del Propietario"
                        id="namepropietario"
                        name="namepropietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ dataForm.namepropietario }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    > 
                        Email
                    </label>

                    <input 
                        type="email"
                        placeholder="Nombre del Propietario"
                        id="email"
                        name='email'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ dataForm.email }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    > 
                        Alta
                    </label>

                    <input 
                        type="date"
                        placeholder="Nombre del Propietario"
                        id="alta"
                        name='alta'
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ dataForm.alta }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    > 
                        Sintomas
                    </label>

                    <textarea 
                        name="sintomas" 
                        id="sintomas"  
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none"
                        placeholder="escribe los sintomas"
                        value={ dataForm.sintomas }
                        onChange={ handleInputChange }
                    />

                    
                </div>


                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={ !paciente.id ? "Agregar paciente" : 'Guardar Cambios' }

                />
            </form>
        </div>
    );

}

export default Formulario;