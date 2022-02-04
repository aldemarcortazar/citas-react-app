import { useEffect, useState } from 'react';

import Header from './components/Header';

import './App.css'
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import { Ipaciente } from './interfaces/pacientes';
import { generateId } from './helpers/generate-id';

function App() {

  const [ pacientes, setPacientes ] = useState<Ipaciente[]>([]);
  const [ paciente, setPaciente ] = useState<Ipaciente>({
    id: '',
    namemascota: '',
    namepropietario: '',
    email: '',
    alta: '',
    sintomas: '',
  });

  useEffect( () => {
    if( localStorage.getItem('pacientes') ){
      const pacientesLS: Ipaciente[] = JSON.parse(localStorage.getItem('pacientes')|| '') ?? [];
      setPacientes( pacientesLS );
    }
  },[] );
  
  useEffect(() => {
    
    localStorage.setItem( 'pacientes', JSON.stringify(pacientes) );

  }, [ pacientes ]);

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={ pacientes }
          setPacientes = { setPacientes }
          paciente={ paciente }
          setPaciente={ setPaciente }
        />
        <ListadoPacientes 
          pacientes={ pacientes }
          setPaciente={ setPaciente }
          setPacientes={ setPacientes }
        />
      </div>
    </div>
  )
}

export default App
