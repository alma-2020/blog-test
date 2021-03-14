import styled from 'styled-components'

export const Image = styled.img`
    max-width: 500px;
    max-height: 400px;
    min-height: 200px;
    min-width: 200px;
    text-align: center;
    border-radius: 8px;
        
    /* make our image seem clickable to the user */
    cursor: pointer;

    @media only screen and (max-width: 550px) {
        max-width: 95%;
        max-height: 250px;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageAndCaptionContainer = styled.div`
    text-align: center;

    p {
        color: #5b5b5b;
    }
`;

export const PostDiv = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;