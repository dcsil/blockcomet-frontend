import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router';
import { Routing } from '../App'
import { useNavigate } from "react-router";
import { act } from "react-dom/test-utils";
import axios from 'axios';

jest.mock('axios', () => jest.fn());

describe('Dashboard Tests,', () => {
    beforeAll(() => {
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
    })

    test("dashboard headers render", async () => {

        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Routing />
                </MemoryRouter>)
        })

        const dashboard = screen.getByTestId('dashboard-container')
        expect(dashboard).toBeTruthy()
    });

    test("dashboard table renders", async () => {
        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Routing />
                </MemoryRouter>)
        })

        const dashboardTable = screen.getByTestId('dashboard-container')
        expect(dashboardTable).toBeTruthy()
      });

    test("clicking add product button goes to CreateProduct", async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Routing />
                </MemoryRouter>)
        })

        const addProductButton = screen.getByTestId('addProduct');
        expect(addProductButton).toBeTruthy();

        axios.mockResolvedValueOnce({
            status: 200,
            data: {
                hashed_uid: "97245242hut2343"
            },
        });

        await act(async ()=>{fireEvent.click(addProductButton)})    
        expect(screen.getByTestId("create-product-container")).toBeTruthy();
    });

    test("clicking validate product button goes to home page", async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/dashboard']}>
                    <Routing />
                </MemoryRouter>)
        })

        const validateProductButton = screen.getByTestId('validateProduct');
        expect(validateProductButton).toBeTruthy();

        await act(async ()=>{fireEvent.click(validateProductButton)})    
        expect(screen.getByTestId("home-container")).toBeTruthy();
    });
})
