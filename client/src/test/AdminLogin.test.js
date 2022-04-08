import React from 'react';
import { Routing } from '../App'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { act } from "react-dom/test-utils";

jest.mock('axios', () => jest.fn());
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
    test("admin login page renders", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/login']}>
                    <Routing />
                </MemoryRouter>)
        }
        )
        const adminLoginPage = screen.getByTestId('admin-login-container')
        expect(adminLoginPage).toBeTruthy()

        expect(screen.getByTestId("username-bar")).toBeTruthy();
        expect(screen.getByTestId("password-bar")).toBeTruthy();
        expect(screen.getByTestId("login-btn")).toBeTruthy();
    });
})
