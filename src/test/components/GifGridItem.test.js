/*
1. configurar enzyme
2. configurar enzyme to JSON
3. debe de mostrar el componente correctamente
    shallow
    wrapper
    wrapper .toMatchSnapshot()
*/

import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";


describe('Pruebas en <GifGridItem />', () => {

    test('debe de mostrar <GifGridItem /> correctamente ', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
})
