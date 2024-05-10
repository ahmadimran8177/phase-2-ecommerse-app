import React from 'react';

const IncorrectCredentials = () => {
    return (
        <div className="incorrect-credentials">
            <h2>Oops! There seems to be a problem.</h2>
            <p>The username or password you entered is incorrect. Please try again.</p>
            <ul>
                <li>Make sure you&apos;ve typed your username and password correctly.</li>
                <li>Check for caps lock being on (passwords are case-sensitive).</li>
                <li>If you&apos;ve forgotten your password, you can click &quot;Forgot Password&quot; below to reset it.</li>
            </ul>
            <a href='/'>Back to home</a>
        </div>
    );
};

export default IncorrectCredentials;
