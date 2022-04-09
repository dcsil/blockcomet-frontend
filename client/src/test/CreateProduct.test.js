import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from 'react-router';
import { Routing } from '../App'
import { act } from "react-dom/test-utils";
import * as helper from '../helpers'
import axios from 'axios';
jest.mock('axios', () => jest.fn());

describe('Create Product Tests,', () => {
    test("Create Product component renders", async () => {

        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn(() => {
            return JSON.stringify("2452wt53634rf34")
        });
        jest.spyOn(helper, 'makeGetReq').mockImplementationOnce(() => {
            return { status: 200, data: "gucci" }
        })
        axios.mockResolvedValue({
            status: 200,
            data: {
                hashed_uid: "97245242hut2343"
            },
        });
        await act(async () => {
            const { getByTestId } = render(
                <MemoryRouter initialEntries={['/create']}>
                    <Routing />
                </MemoryRouter>)
        })
        const createProductContainer = screen.getByTestId('create-product-container')
        expect(createProductContainer).toBeTruthy()
    });
})