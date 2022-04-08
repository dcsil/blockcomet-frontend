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
import Dashboard from '../Dashboard'
import { Routing } from '../App'
describe('Dashboard Tests,', () => {
    test("Dashboard component renders", () => {

        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn(() => {
            return JSON.stringify("2452wt53634rf34")
        });

        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Routing />
            </MemoryRouter>)
        const dashboard = screen.getByTestId('dashboard-container')
        expect(dashboard).toBeTruthy()
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