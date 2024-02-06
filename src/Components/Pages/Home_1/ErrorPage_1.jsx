// import React from 'react';

import useTitle from "../../../Custom_Hooks/useTitle";
import Error_Content from "../../Sections/Error_Content";

const ErrorPage_1 = () => {
    useTitle('Error Page');
    return (
        <div>
            <Error_Content></Error_Content>
        </div>
    );
};

export default ErrorPage_1;