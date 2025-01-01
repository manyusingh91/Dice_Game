
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>
            How to play Dice game 
        </h2>
        <div className="text">
        <ul>
          <li>Select any number</li>
          <li>Click on dice images</li>
          <li>after the click if selected number is equal to the dice number you will get same point as dice. if you get wrong guess than 2 poinst will be dedcuted</li>
      </ul>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
   max-width: 520px;
   margin: 0 auto;
   margin-top: 40px;
   background-color: #fbf1f1;
   border-radius: 10px ;
   padding: 20px;
   h2{
    font-size:20px;
   }

    .text{
      margin-top: 24px;
    }
`