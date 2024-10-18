import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectUserPage from "../ProjectUserPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectUser page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectUserPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectUser-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectUser-add-button")).toBeInTheDocument();
});
