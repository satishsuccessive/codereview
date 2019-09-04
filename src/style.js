import styled from 'styled-components';

const Navigation = styled.div`
padding-top: 0;
max-width: 1920px;
margin: 0 auto;
background-color: #1976d2;
color:#fff;
font-family:Arial;
ul {
    text-align:right;
    li {
        display:inline-block;
        margin-right:20px;
        height:50px;
        line-height:50px;
        a {
            color:#fff;
            text-decoration:none;
        }
    }
}
`;
export { Navigation };
