import React from 'react';
import { Routing } from '../App'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router';
import axios from 'axios';
import { act } from "react-dom/test-utils";

jest.mock('axios', () => jest.fn());
describe('Home Page', () => {
    test("Home page renders", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/']}>
                    <Routing />
                </MemoryRouter>)
        }
        )
        const homeContainer = screen.getByTestId('home-container')
        expect(homeContainer).toBeTruthy()
        const validateBar = screen.getByTestId("search-bar")
        expect(validateBar).toBeTruthy();
        expect(screen.getByTestId("logo-img")).toBeTruthy();
        expect(screen.getByTestId("admin-login-btn")).toBeTruthy();

    });
})
