import styled from "styled-components";

interface FloatContainer{
    display: boolean;
    gap: string;
    paddingBotton: string;
    margin?: string;
}

export const Container = styled.div<FloatContainer>`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 24px 24px 0px 0px;
    height: ${(props) => props.display ? "85%" : "0"};
    flex-direction: column;
    text-align: center;
    align-items: center;
    z-index: 1;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-bottom: ${(props) => props.margin};
    transition: .5s height ease-in-out;
    padding: 0px 0px ${(props) => props.paddingBotton} 0px;
    gap: ${(props) => props.gap};
    overflow-y: scroll;
    visibility: ${(props) => props.display ? "visible" : "hidden"};
`;

interface BodyContainerProps{
    gap: string;
    width: string;
    height: string;
}

export const BodyContainer = styled.div<BodyContainerProps>`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: ${(props) => props.width};
    height: ${(props) => props.height};;
    padding: 24px, 16px, 24px, 16px;
    gap: ${(props) => props.gap};
    text-align: center;
    align-items: center;
`;

export const NavContainer = styled.div`
    border-radius: 12px 12px 0px 0px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    width: 375px;
    height: 40px;
    justify-content: space-between;
    padding: 16px, 16px, 0px, 16px;
`;

export const TextNav = styled.a`
    font-family: Inter, sans-serif;
    background-color: none;
    text-decoration: none;
    border: none;
    width: 53px;
    height: 19px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.36px;
    color: #A1A1AA;
    margin: 0px 7px 0px 7px;
    cursor: pointer;
`;
