import React from "react";
import { render, screen } from "@testing-library/react";

import CalendarPage from "../CalendarPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders calendar page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CalendarPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("calendar-datatable")).toBeInTheDocument();
    expect(screen.getByRole("calendar-add-button")).toBeInTheDocument();
});
