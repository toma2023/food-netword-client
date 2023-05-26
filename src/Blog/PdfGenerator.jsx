import React from 'react';
import { Document, Page, Text } from "@react-pdf/renderer";


const PdfGenerator = () => {
    return (
        <Document>
            <Page>
                <Text>1. Tell us the differences between uncontrolled and controlled components.
                    In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.

                    2. How to validate React props using PropTypes
                    Below are the validators for the basic data types:

                    i. PropTypes.any: The prop can be of any data type
                    ii. PropTypes.bool: The prop should be a Boolean
                    iii. PropTypes.number: The prop should be a number
                    iv. PropTypes.string: The prop should be a string
                    v. PropTypes.func: The prop should be a function
                    vi. PropTypes.array: The prop should be an array
                    vii. PropTypes.object: The prop should be an object
                    viii. PropTypes.symbol: The prop should be a symbol

                    3. Tell us the difference between nodejs and express js.
                    NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.

                    4. What is a custom hook, and why will you create a custom hook?
                    Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</Text>
            </Page>
        </Document>
    );
};

export default PdfGenerator;