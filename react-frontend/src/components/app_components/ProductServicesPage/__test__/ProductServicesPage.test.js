import React from "react";
import { render, screen } from "@testing-library/react";

import ProductServicesPage from "../ProductServicesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders productServices page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProductServicesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("productServices-datatable")).toBeInTheDocument();
    expect(screen.getByRole("productServices-add-button")).toBeInTheDocument();
});
