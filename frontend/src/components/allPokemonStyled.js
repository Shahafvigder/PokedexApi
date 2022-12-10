import styled from "@emotion/styled";

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 3rem 0px;
`;
export const CellDiv = styled.div`
  height: 250px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
`;

export const CellIdH1 = styled.h3``;

export const CellNameH1 = styled.h4`
margin: 0;
`;

export const CellTypeH1 = styled.h4`
margin: 0;
`;

export const Cellimage = styled.img`
  height: 100px;
  width: 100px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsButtonPopUp = styled.button`
background-color: transparent;
border-radius: 10px;
border: 1px solid black;
text-align: center;
width: 40px
height: 20px;
font-size: 14px;
&:hover{
  background-color: white;
}
`;
