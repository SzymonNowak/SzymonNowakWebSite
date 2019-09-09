import React from 'react';
import styled from 'styled-components'


    const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(1fr,2fr));
`;



const GridTemplate = ({children}) => {
    return (
      <Grid>
        {children}
      </Grid>
    )
}

export default GridTemplate;