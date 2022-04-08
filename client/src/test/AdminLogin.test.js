import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { AdminLogin } from '../AdminLogin';
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import { MemoryRouter } from 'react-router';
import { Router } from 'react-router-dom'

// pay attention to write it at the top level of your file
// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: () => mockedUsedNavigate,
// }));
// jest.mock("react-router-dom", () => ({
//     ...(jest.requireActual("react-router-dom")),
//     useNavigate: () => ({
//         navigate: jest.fn().mockImplementation(() => ({}))
//     })
// }));
describe('Admin login', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    test("admin login page renders", () => {
        const { getByTestId } = render(
            <App />
        );
        const adminLoginButton = screen.getByTestId('admin-login-btn')
        expect(adminLoginButton).toBeTruthy()
        fireEvent.click(adminLoginButton)
        const adminLoginPage = screen.getByTestId('admin-login-container')
        expect(adminLoginPage).toBeTruthy()

        expect(getByTestId("username-bar")).toBeTruthy();
        expect(getByTestId("password-bar")).toBeTruthy();
        expect(getByTestId("login-btn")).toBeTruthy();
    });
})
