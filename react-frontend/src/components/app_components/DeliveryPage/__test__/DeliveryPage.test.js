import React from "react";
import { render, screen } from "@testing-library/react";

import DeliveryPage from "../DeliveryPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders delivery page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeliveryPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("delivery-datatable")).toBeInTheDocument();
    expect(screen.getByRole("delivery-add-button")).toBeInTheDocument();
});
