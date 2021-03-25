import styled, { css } from 'styled-components'

const cardBackground = 'white';
const cardWidth = '340px';

export const PostCardGridContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat( auto-fit, minmax(${cardWidth}, 1fr) );
`;

export const PostCardDiv = styled.div`
    background: ${cardBackground};
    width: ${cardWidth};
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .post-cover {
        display: block;
        height: 168px;
        width: 100%;
        box-shadow: 0px -2px 5px -2px gray inset;
        background-position: center center;
        background-size:     cover;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        //border-top-left-radius: 3px;
        //border-top-right-radius: 3px;
    }
    
    a.card-title {
        display: block;
        color: #E91E63;        
    }

    .card-date {
        float: right;
        color: #999;
        //color: whitesmoke;
        padding: 9px;
    }

    .card-read-more {
        text-align: center;
    }

    .card-description {
        text-align: start;
        font-size: 18px;

        p {
            display: block;
            max-width: 95%;
            margin: 0;
            margin-left: 10px;
        }

        a {
            display: inline-block;
            background: #E91E63;
            color: white;
            padding: 5px;
            margin-bottom: 0;
            margin-top: 10px;
            border-radius: 4px;
            width: 97%;
        }
    }
`;