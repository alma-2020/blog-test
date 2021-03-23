import styled, { css } from 'styled-components'

const cardBorderRadius = '5px';
const cardBackground = '#E91E63';

export const PostCardGridContainer = styled.div`
    display: grid;
    justify-items: center;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) );
`;

export const PostCard = styled.div`
    background: ${cardBackground};
    width: 300px;
    border: 1px solid ${cardBackground};
    border-radius: ${cardBorderRadius};
    box-shadow: 0px 0px 10px 0px gray;
    text-align: center;

    img.post-cover {
        border-top-left-radius: ${cardBorderRadius};
        border-top-right-radius: ${cardBorderRadius};
    }

    a.card-title {
        //color: #0070f3;
        color: white;
    }

    .card-date {
        float: right;
        //color: #999;
        color: whitesmoke;
        padding: 9px;
    }
`;