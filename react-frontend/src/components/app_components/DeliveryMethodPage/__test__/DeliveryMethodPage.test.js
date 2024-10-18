import React from "react";
import { render, screen } from "@testing-library/react";

import DeliveryMethodPage from "../DeliveryMethodPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deliveryMethod page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeliveryMethodPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deliveryMethod-datatable")).toBeInTheDocument();
    expect(screen.getByRole("deliveryMethod-add-button")).toBeInTheDocument();
});
