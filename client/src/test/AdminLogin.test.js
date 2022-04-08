import React from 'react';
import { Routing } from '../App'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { act } from "react-dom/test-utils";

jest.mock('axios');

describe('Admin login', () => {
    test("admin login page renders correctly and login button takes to dashboard", async () => {
        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn(() => {
            return JSON.stringify("2452wt53634rf34")
        });

        axios.mockResolvedValueOnce({
            status: 200,
            data: { data: { access_token: JSON.stringify("2452wt53634rf34") } }
        })
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/login']}>
                    <Routing />
                </MemoryRouter>)
        }
        )
        const adminLoginPage = screen.getByTestId('admin-login-container')
        expect(adminLoginPage).toBeTruthy()
        const inputUsername = screen.getByTestId("username-bar")
        expect(inputUsername).toBeTruthy();
        const inputPassword = screen.getByTestId("password-bar")
        expect(inputPassword).toBeTruthy();
        await act(async () => { fireEvent.change(inputUsername, { target: { value: "gucci" } }) })
        await act(async () => { fireEvent.change(inputPassword, { target: { value: "PradaSucks" } }) })
        const adminLoginButton = screen.getByTestId("login-btn")
        expect(adminLoginButton).toBeTruthy();
        axios.mockResolvedValueOnce({
            status: 200,
            data: { data: { product_data: [{ "key": "Brand", "value": "rohit" }, { "key": "Product Name", "value": "Jeans" }, { "key": "Product ID", "value": "69399d44f92a4c0f31180321d4a6bfcdc48f7f841b3461e25bd83b53d7755c45" }, { "key": "Date of Production", "value": "02/03./22" }], "added_by": "blockcomet_mvp" } }
        })
        await act(async () => { fireEvent.click(adminLoginButton) })
        const dashboard = screen.getByTestId("dashboard-container")
        expect(dashboard).toBeTruthy()
    });
})
