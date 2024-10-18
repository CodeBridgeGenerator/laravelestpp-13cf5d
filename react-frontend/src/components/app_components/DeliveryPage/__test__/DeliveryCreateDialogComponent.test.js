import React from "react";
import { render, screen } from "@testing-library/react";

import DeliveryCreateDialogComponent from "../DeliveryCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders delivery create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <DeliveryCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("delivery-create-dialog-component")).toBeInTheDocument();
});
