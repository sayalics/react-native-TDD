import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe( "App", () => {
    test("should render correctly",() => {
        renderer.create(<App/>);
    })
})