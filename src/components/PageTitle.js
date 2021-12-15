import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>WorldTrip - {title}</title>
        </Helmet>
    );
};

export default PageTitle;