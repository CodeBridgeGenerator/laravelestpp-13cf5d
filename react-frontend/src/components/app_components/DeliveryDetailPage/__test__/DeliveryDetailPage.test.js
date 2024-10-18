import React from "react";
import { render, screen } from "@testing-library/react";

import DeliveryDetailPage from "../DeliveryDetailPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deliveryDetail page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeliveryDetailPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deliveryDetail-datatable")).toBeInTheDocument();
    expect(screen.getByRole("deliveryDetail-add-button")).toBeInTheDocument();
});
