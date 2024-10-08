import styled from "styled-components";

export const Empty = styled.div``;

interface ProgressProps {
    enabled: boolean
}

export const Progress = styled.div<ProgressProps>`
    width: 100%;
    height: 6px;
    border-radius: 4px;
    background-color: ${props => props.enabled ? "#C2AE8F" : "#EFF0F3"};
`;

export const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 85%;
    margin: auto;
`;

interface ContainerProps {
    justify_content?: string;
    flex_direction?: string;
    align_items?: string;
    gap?: string;
    margin?: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: auto;
    display: flex;
    align-items: ${props => props.align_items ? props.align_items : "center"};
    gap: ${props => props.gap ? props.gap : "0"};
    flex-direction: ${props => props.flex_direction ? props.flex_direction : "column"};
    justify-content: ${props => props.justify_content ? props.justify_content : "center"};
    margin-bottom:  ${(props) => props.margin ? "100px" : "0px"};
`;

export const IconBoxDiv = styled.div`
    padding: 8px;
    border-radius: 12px;
    background-color: #FFFFFF33;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Divider = styled.div`
    width: 85%;
    height: 2px;
    border-radius: 2px;
    background-color: #FAFAFA;
`;