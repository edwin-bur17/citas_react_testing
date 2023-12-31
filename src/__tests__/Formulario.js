import React from "react"
import { render, screen} from "@testing-library/react"
// render permite montar un componente 
// cleanup: limpia la memoria para pasar de una prueba a otra
// fireEvent: para dar click en un botón
import Formulario from "../components/Formulario.js"
import '@testing-library/jest-dom/extend-expect.js'
import userEvent from "@testing-library/user-event"

const crearCita = jest.fn() // para buscar la función que se requiere

// afterEach(cleanup) // Implementación, las nuevas versiones ya lo hacen automaticamente

test('<Formulario /> Cargar el formulario y revisar que todo sea correcto', ()=>{
    // const wrapper = render(<Formulario />)
    // wrapper.debug()
    render(<Formulario crearCita={crearCita} />)
    expect( screen.getByText('Crear Cita')).toBeInTheDocument() // Testing a un texto (título) del formulario

    // Heading
    const titulo = screen.getByTestId('titulo') // Variable del componente
    expect(titulo.tagName).toBe('H2') // Testing con un id en el elemento a hacer la prueba
    expect(titulo.tagName).not.toBe('H1') // No se espera una etiqueta h1
    expect(titulo.textContent).toBe('Crear Cita')

    // Btn submit
    expect( screen.getByTestId('btn-submit').tagName).toBe('BUTTON') // Testing al botón
    expect( screen.getByTestId('btn-submit').textContent).toBe('Agregar Cita') // Testing al contenido del botón
    expect( screen.getByTestId('btn-submit').textContent).not.toBe('Agregar Nueva Cita')
})

// Testing a la alerta del formulario
test('<Formulario/> Validación del formulario', ()=> {
    render(<Formulario 
        crearCita={crearCita}
      />)

    // Click en el botón de enviar
    const btnSubmit = screen.getByTestId('btn-submit') // conectar con el botón mediante el id
    userEvent.click(btnSubmit)

    // Revisar por la alerta
    const alerta = screen.getByTestId('alerta')
    expect(  alerta.textContent).toBeInTheDocument
    expect( alerta.textContent).toBe('Todos los campos son obligatorios')
    expect( alerta.tagName).toBe('P')
})

// testing crear nueva cita
test('<Formulario/> Validación del formulario', ()=> {
    // Activar el formulario
    render(<Formulario 
        crearCita={crearCita}
      />)

    // Simular crear una cita nueva, escribir en el formulario
    userEvent.type(screen.getByTestId('mascota'), 'coco')
    userEvent.type(screen.getByTestId('propietario'), 'carlos')
    userEvent.type(screen.getByTestId('fecha'), '2023-10-08')
    userEvent.type(screen.getByTestId('hora'), '01:04')
    userEvent.type(screen.getByTestId('sintomas'), 'solo come')

    // Click en el botón de enviar
    const btnSubmit = screen.getByTestId('btn-submit') // conectar con el botón mediante el id
    userEvent.click(btnSubmit)

    // Revisar por la alerta
    const alerta = screen.queryByTestId('alerta')
    expect(  alerta ).not.toBeInTheDocument

    // Crear cita y comprobar que la función se haya llamado 
    expect( crearCita ).toHaveBeenCalled()
    expect( crearCita ).toHaveBeenCalledTimes(1) // Cantidad de veces que se llama
})


