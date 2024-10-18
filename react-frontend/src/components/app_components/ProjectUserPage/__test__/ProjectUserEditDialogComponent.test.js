import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectUserEditDialogComponent from "../ProjectUserEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectUser edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectUserEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectUser-edit-dialog-component")).toBeInTheDocument();
});
