import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { AdminLogin } from '../AdminLogin';
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from 'history'
import { MemoryRouter, Route, Routes } from 'react-router';
import { Router } from 'react-router-dom'
import Validate from '../Validate'
import Home from '../Home'
import { Routing } from '../App'
describe('Validate Tests,', () => {
    test("Validate component renders", () => {
        // global.window = Object.create(window);
        // const url = "/validate/1234";
        // Object.defineProperty(window, "location", {
        //     value: {
        //         pathname: url
        //     },
        //     writable: true
        // });
        // jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1234' });
        // const { getByTestId } = render(
        //     <App />
        // );


        // const { getByTestId } = render(
        //     <MemoryRouter initialEntries={['/validate/1234']}>
        //         <Routing />
        //     </MemoryRouter>)
        // const validateButton = screen.getByTestId('success')
        // expect(validateButton).toBeTruthy()
        // fireEvent.click(validateButton)
        // const history = createMemoryHistory()
        // history.push('/login')
        // console.log("history", history)
        // const { getByTestId } = render(
        //     <Router history={history}>
        //         <AdminLogin />
        //     </Router>
        // );
        // const adminLoginButton = screen.getByTestId('admin-login-btn')
        // expect(adminLoginButton).toBeTruthy()
        // fireEvent.click(adminLoginButton)
        // const adminLoginPage = screen.getByTestId('admin-login-container')
        // expect(adminLoginPage).toBeTruthy()

        // expect(getByTestId("username-bar")).toBeTruthy();
        // expect(getByTestId("password-bar")).toBeTruthy();
        // expect(getByTestId("login-btn")).toBeTruthy();
    });
})