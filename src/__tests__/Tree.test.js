import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from "../App";
import {TreeProvider} from "../context/TreeContext";

describe('Test', () => {
    test('document has /root', () => {
        const {getByText} = render(<App/>);
        const tree = getByText(/root/i);
        expect(tree).toBeInTheDocument();
    });

    it('renders without crashing TreeProvider', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TreeProvider/>, div);
    });
    it('renders without crashing App', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });
});