import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router';
import { Routing } from '../App'
import { act } from "react-dom/test-utils";
import axios from 'axios';
jest.mock('axios');

describe('Validate Tests,', () => {
    test("Validate Sucess component renders", async () => {
        axios.get.mockResolvedValueOnce({
            status: 200,
            data: { data: { product_data: [{ "key": "Brand", "value": "rohit" }, { "key": "Product Name", "value": "Jeans" }, { "key": "Product ID", "value": "69399d44f92a4c0f31180321d4a6bfcdc48f7f841b3461e25bd83b53d7755c45" }, { "key": "Date of Production", "value": "02/03./22" }], "added_by": "blockcomet_mvp" } }
        });

        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/validate/1234']}>
                    <Routing />
                </MemoryRouter>)
        })
        const validateSucess = screen.getByTestId('success')
        expect(validateSucess).toBeTruthy()
    });

    test("Validate Failure component renders", async () => {
        axios.get.mockResolvedValueOnce(Promise.reject());

        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/validate/1234']}>
                    <Routing />
                </MemoryRouter>)
        })
        const validateFailure = screen.getByTestId('failure')
        expect(validateFailure).toBeTruthy()
    });
})