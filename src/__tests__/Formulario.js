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
    const titulo = screen.getByTestId('titulo') // Variable del componente
    expect(titulo.tagName).toBe('H2') // Testing con un id en el elemento a hacer la prueba
    expect(titulo.tagName).not.toBe('H1') // No se espera una etiqueta h1
    expect(titulo.textContent).toBe('Crear Cita')

    // Btn submit
    expect( screen.getByTestId('btn-submit').tagName).toBe('BUTTON') // Testing al botón
    expect( screen.getByTestId('btn-submit').textContent).toBe('Agrgar Cita') // Testing al contenido del botón
    expect( screen.getByTestId('btn-submit').textContent).not.toBe('Agregar Nueva Cita')
})