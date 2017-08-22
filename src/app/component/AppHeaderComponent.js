'use strict';
import React from "react";
import propType from "prop-types";

const AppHeaderComponent=(props)=>(
    <div>
        <label>Header {props.exampleText}</label>
    </div>
);

AppHeaderComponent.propTypes={
    exampleText: propType.string,
    onClick: propType.func.isRequired
};

AppHeaderComponent.defaultTypes={
    exampleText: "Default Text",
    onClick: ()=>{}
};

export default (AppHeaderComponent);