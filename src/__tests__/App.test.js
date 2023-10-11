import React from "react"
import { render, screen} from "@testing-library/react"
// render permite montar un componente 
// cleanup: limpia la memoria para pasar de una prueba a otra
// fireEvent: para dar click en un botón
import App from "../App"
import '@testing-library/jest-dom/extend-expect.js'
import userEvent from "@testing-library/user-event"

test('<App/> La aplicación funciona bien la primera vez', () =>{
    // comprobar que todos los elementos estén montados correctamente
    // const wrapper = render(<App/>)
    // wrapper.debug()

    render(<App/>)
    expect( screen.getByText('Administrador de Pacientes')).toBeInTheDocument() // Comprobar el primer texto
    expect( screen.getByTestId('nombre-app').textContent).toBe('Administrador de Pacientes') // Comprobar un texto mediante un id
    expect( screen.getByTestId('nombre-app').tagName).toBe('H1')

    expect( screen.getByText('Crear Cita')).toBeInTheDocument()
    expect( screen.getByText('No hay citas')).toBeInTheDocument()
})