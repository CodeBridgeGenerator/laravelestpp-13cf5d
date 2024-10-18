import React from "react";
import { render, screen } from "@testing-library/react";

import DeliveryDetailEditDialogComponent from "../DeliveryDetailEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders deliveryDetail edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeliveryDetailEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("deliveryDetail-edit-dialog-component")).toBeInTheDocument();
});
