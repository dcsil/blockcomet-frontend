import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router';
import { Routing } from '../App'
import { act } from "react-dom/test-utils";
import axios from 'axios';
jest.mock('axios', () => jest.fn());

describe('Dashboard Tests,', () => {
    test("Dashboard component renders", async () => {

        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn(() => {
            return JSON.stringify("2452wt53634rf34")
        });

        axios.mockResolvedValue({
            status: 200,
            data: {
                product_data: [{ "key": "Brand", "value": "rohit" }, { "key": "Product Name", "value": "Jeans" }, { "key": "Product ID", "value": "69399d44f92a4c0f31180321d4a6bfcdc48f7f841b3461e25bd83b53d7755c45" }, { "key": "Date of Production", "value": "02/03./22" }]
            }
        });

        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Routing />
                </MemoryRouter>)
        }
        )
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