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
  flex-direction: column;
  align-items: center;
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
  &:hover{
    background-color: white;
    color: black;
  }
`;

export const StCard = styled.div`
  height: 200px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

export const StHeather = styled.div`
  border-radius: 10px;
  background-color: aliceblue;
  justify-items: center;
  margin: 20px;
  border: 1px solid rgb(221, 221, 221);
  padding: 20px;
`;

export const StTitle = styled.h1`
  font-size: 1.5em;
  color: red;
  margin-bottom: 10px;
  padding: 15px;
`;

export const StDashboardDiv = styled.div`
  display: flex;
  gap: 2.125rem;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    position: relative;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const StPokemonBalImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 2px dashed rgb(204, 204, 204);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const StAddAndDeleteButton = styled.button`
  background-color: #fc1919;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 40px;
  height: 25px;
  &:hover{
    background-color: #8f0d0d;
  }
`;
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
  border-radius: 10px;
  background-color: aliceblue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 20px;
  margin: 20px;
  border: 1px solid rgb(221, 221, 221);
`;
