import styled from "styled-components";

const BannerBG = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 64px);
    background: url(${props => props.img}) center/cover no-repeat;
`;

export default BannerBG;