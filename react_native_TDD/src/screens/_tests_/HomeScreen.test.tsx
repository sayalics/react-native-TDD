import React from "react"
import { render } from "@testing-library/react-native"
import HomeScreen from "../HomeScreen"
import moment from "moment";

const now = moment(new Date());

describe("HomeScreen",() => {
    test("should render correctly",() => {
        const wrapper = render(<HomeScreen/>);
        wrapper.getByTestId("home-screen");
    })

    describe("Title section", () => {
        beforeEach(() => {
            jest.useFakeTimers();
            jest.setSystemTime(new Date("Thursday, May 18, 2023")); // Saturday, 01 Jan 2000 00:00 UTC    
        });

        afterEach(() => {
            jest.useRealTimers();
        })

        test('should contain current date',() => {
            const wrapper = render(<HomeScreen/>);
            wrapper.getByText(now.format('MMM DD, YYYY'));
        })

        test('should contain current day',() => {
            const wrapper = render(<HomeScreen/>);
            wrapper.getByText(now.format('dddd'));
        })
    })
})