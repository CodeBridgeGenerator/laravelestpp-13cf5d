import React from "react";
import { render, screen } from "@testing-library/react";

import MilestoneCreateDialogComponent from "../MilestoneCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders milestone create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <MilestoneCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("milestone-create-dialog-component")).toBeInTheDocument();
});
