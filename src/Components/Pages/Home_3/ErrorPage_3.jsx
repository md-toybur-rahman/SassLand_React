import React from 'react';
import Error_Content from '../../Sections/Error_Content';
import useTitle from '../../../Custom_Hooks/useTitle';

const ErrorPage_3 = () => {
    useTitle('Error Page');

    return (
        <section>
            <Error_Content></Error_Content>
        </section>
    );
};

export default ErrorPage_3;