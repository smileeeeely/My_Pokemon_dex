import styled from "styled-components";

export const StName = styled.h1`
  padding: 2vh;
  color: red;
  font-weight: 900;
  font-size: x-large;
`;

export const StContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const StPadding = styled.div`
  padding: 4vh;
`;

export const StOutButton = styled.button`
  color: white;
  background-color: black;
  border-radius: 5px;
  height: 30px;
  width: 70px;
  cursor: pointer;
`;

export const StCard = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const StHeader = styled.div`
  width: auto;
  height: 250px;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
  margin: 20px;
`;

export const StTitle = styled.h1`
  font-size: xx-large;
`

export const StDiv = styled.div`
  display: flex;
  gap: 30px;
`;

export const StPokemonBalImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const StAddAndDeleteButton = styled.button`
  cursor: pointer;
  background-color: #ff1818;
  color: white;
  border: none;
  border-radius: 5px;
  width: 40px;
  height: 25px;
`
export const StHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

export const StHomeButton = styled.button`
  width: 150px;
  height: 30px;
  background-color: #c20202;
  border-radius: 5px;
  color: white;
  border: none;
  margin: 0px;
  cursor: pointer;
`;

export const StListBorder = styled.div`
  width: auto;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
  margin: 20px;
  padding: 20px;
`;
