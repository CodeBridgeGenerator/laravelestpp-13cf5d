import React from "react";
import { render, screen } from "@testing-library/react";

import ProjectAttachmentPage from "../ProjectAttachmentPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders projectAttachment page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ProjectAttachmentPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("projectAttachment-datatable")).toBeInTheDocument();
    expect(screen.getByRole("projectAttachment-add-button")).toBeInTheDocument();
});
