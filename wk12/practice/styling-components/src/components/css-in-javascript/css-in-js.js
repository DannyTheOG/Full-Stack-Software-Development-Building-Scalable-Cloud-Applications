import styled from 'styled-components';

const BrownHeader = styled.h3`
    background-color: brown;
    color: white;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
`;

function CssInJs()  {
    return(
        <BrownHeader>CSS-in-Javascript</BrownHeader>
    );
}

export default CssInJs;