import styled from "styled-components";

export const CenterBlockFilter = styled.div`
position: relative;
z-index: 0;
position: relative;
z-index: 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
margin-bottom: 51px;
  gap: 10px;`

export const FilterTittle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-right: 15px;`

export const FilterOptions = styled.ul`
position: absolute;
background-color: #313131;
width: 248px;
border-radius: 12px;
display: inline-flex;
padding: 34px;
flex-direction: column;
align-items: flex-start;
gap: 10px;`

export const DropdownItems = styled.a`
color: #FFF;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 24px;

:hover{
  color: #B672FF;
  text-decoration: underline;
}`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  border-color: ${props => props.isActive ? '#AD61FF' : ' '};
  color: ${props => props.isActive ? '#AD61FF' : ' '};
  cursor:  ${props => props.isActive ? 'pointer' : ' '};
  fill: ${props => props.isActive ? 'transparent' : ' '};
  stroke:${props => props.isActive ? '#FFFFFF' : ' '};`
