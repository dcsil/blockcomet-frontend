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
describe('Create Product Tests,', () => {
    test("Create Product component renders", () => {

        jest.spyOn(window.localStorage.__proto__, 'getItem');
        window.localStorage.__proto__.getItem = jest.fn(() => {
            return JSON.stringify("2452wt53634rf34")
        });

        const { getByTestId } = render(
            <MemoryRouter initialEntries={['/create']}>
                <Routing />
            </MemoryRouter>)
        const createProductContainer = screen.getByTestId('create-product-container')
        expect(createProductContainer).toBeTruthy()
    });
})