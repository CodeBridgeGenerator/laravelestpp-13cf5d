import React from "react";
import { render, screen } from "@testing-library/react";

import MilestonePage from "../MilestonePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders milestone page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MilestonePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("milestone-datatable")).toBeInTheDocument();
    expect(screen.getByRole("milestone-add-button")).toBeInTheDocument();
});
