import React from "react"
import { render, screen } from "@testing-library/react"
// render permite montar un componente 
import Formulario from "../components/Formulario.js"
import '@testing-library/jest-dom/extend-expect.js'

test('<Formulario /> Cargar el formulario y revisar que todo sea correcto', ()=>{
    // const wrapper = render(<Formulario />)
    // wrapper.debug()
    render(<Formulario />)
    expect( screen.getByText('Crear Cita')).toBeInTheDocument() // Testing a un texto (título) del formulario

    // Heading
    expect(screen.getByTestId('titulo').tagName).toBe('H2') // Testing con un id en el elemento a hacer la prueba
    expect(screen.getByTestId('titulo').tagName).not.toBe('H1') // No se espera una etiqueta h1
    expect(screen.getByTestId(titulo).textContent).toBe('Crear Cita')
})