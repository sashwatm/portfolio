import React from 'react';
import { Typography } from '@material-ui/core';

import { useDencrypt } from "use-dencrypt-effect";

const options = {
  interval: 50
}

const DencryptTypography = ({children, ...rest}: any) => {
    const { result, dencrypt } = useDencrypt(options);

    React.useEffect(() => {
      dencrypt(children)
    });

    return (
      <Typography {...rest}>
        {result}
      </Typography>
    );
};

export default DencryptTypography;