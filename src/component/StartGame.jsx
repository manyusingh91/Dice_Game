import styled from "styled-components"
import { Button } from "../styled/Button";

const StartGame = ( {toggle} ) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.jpg" alt="dices_images" />
        </div>
        <div className="content">
         <h1>Dice Game</h1>
         <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
    max-width: 1080px;
    display: flex;
    margin: 0 auto;
    height: 90vh;
    align-items: center;
    .content {
        h1{
            font-size:96px;
            white-space: nowrap;
        }
    }
    img {
        border: none;
    }
`;
 