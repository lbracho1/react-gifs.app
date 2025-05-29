import { render, screen } from "@testing-library/react"
import { GifItems } from "../../src/components/GifItems"


describe('Pruebas en GifItems', () => {

    const title = 'Toyota Hilux';
    const url = 'https://www.tucarro.com.ve/';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <GifItems title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
        
    });

    test('debe de mostar las pruebas con el URL y el ALT indicado', () => {
        
        render( <GifItems title={ title } url={ url } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })


    test('debe de mostar el titulo en el componente', () => { 
       
        render( <GifItems title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

     })


    })