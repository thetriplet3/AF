'use strict';

import React from 'react';

const User = props => {
    const { user } = props;
    return <tr>
        <td>{user.name}</td>
        <td>{user.address}</td>
    </tr>
};

export default User;