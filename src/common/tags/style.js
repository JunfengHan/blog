import styled from 'styled-components';

export const TagsWrapper = styled.div`
    overflow: hidden;
    padding: 30px 0 50px;
    border-left: 1px solid #eeeeee;
`;

export const TagsItem = styled.a`
    float: left;
    padding: 4px 6px;
    margin-left: 12px;
    margin-top: 12px;
    border-radius: 4px;
    color: #808080;
    font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    font-size: 14px;
    background: #eeeeee;
    cursor: pointer;
    &.active {
        background: #f08775;
        color: #ffffff;
    }
`;