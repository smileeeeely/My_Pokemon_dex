import styled from "styled-components";

const StTitle = styled.div`
  width: auto;
  height: 200px;
  border-radius: 5px;
  background-color: aliceblue;
  justify-items: center;
`;

const StForm = styled.form`
  display: flex;
  gap: 50px;
`;

const StCard = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  border: 2px dashed #b2b2b2;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = () => {
  return (
    <>
      <StTitle>
        <h2>나만의 포켓몬</h2>
        <StForm>
          <StCard>드래곤볼</StCard>
          <StCard>드래곤볼</StCard>
          <StCard>드래곤볼</StCard>
          <StCard>드래곤볼</StCard>
          <StCard>드래곤볼</StCard>
          <StCard>드래곤볼</StCard>
        </StForm>
      </StTitle>
    </>
  );
};

export default Dashboard;
