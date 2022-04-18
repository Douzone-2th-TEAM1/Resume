import styled from 'styled-components';
import { keyframes } from 'styled-components';

const moveRight = (flag) => {
  console.log(flag);
  if (flag) {
    return keyframes`
      from{
        left:-40%
      }to{
        left:40%;
        right:0
      }
    `;
  } else {
    return keyframes`
      from{
        left:40%;
        right:0
      }to{
        left:-40%
      }
    `;
  }
};

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()}
  width:100%;
  height: 100%;
  position: fixed;
`;
// -------------------------------------------
export const Background = styled.div`
  border-top: 1080px solid #334257;
  border-right: 200px solid transparent;
  border-left: 200px solid transparent;
  width: 95%;
  left: -40%;
  animation: ${(props) => moveRight(props.clickBtn)} 2s;
  animation-fill-mode: forwards;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 0;
`;
// -------------------------------------------
export const LeftForm1 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: white;
  width: fit-content;
  text-align: center;
  margin-top: 5%;
  margin-left: -4%;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const Text1 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text2 = styled.div`
  margin-top: 10%;
  font-size: 32px;
  font-weight: normal;
  line-height: 150%;
`;
export const Btn1 = styled.button`
  margin-top: 10%;
  cursor: pointer;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  width: 320px;
  height: 80px;
`;
// -------------------------------------------
export const RightForm1 = styled.div`
  min-width: 300px;
  width: fit-content;
  z-index: 1;
  color: black;
  text-align: center;
  margin-top: 3%;
  margin-left: 25%;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const Text3 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text4 = styled.div`
  font-size: 32px;
  font-weight: normal;
  line-height: 150%;
  margin-top: 5%;
`;
export const EnterForm = styled.div`
  margin-top: 10%;
  text-align: left;
`;
export const Text5 = styled.div`
  font-size: 20px;
  font-weight:bolder;
`;
export const Enter1 = styled.input`
  width: 100%;
  height: 40px;
  border: black 1px solid;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Text6 = styled.div`
  margin-top: 5%;
  font-size: 20px;
  font-weight:bolder;
`;
export const Enter2 = styled.input`
  border: black 1px solid;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Btn2 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  border-color:white;
  color: white;
  font-size: 32px;
  height: 80px;
  background-color: #9e9e9e;
  margin-top: 5%;
`;
// -------------------------------------------
export const LeftForm2 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: black;
  width: fit-content;
  text-align: center;
  margin-top: 0%;
  margin-left: 0%;

  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Text2_1 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const EnterForm2 = styled.div`
  margin-top: 10%;
  text-align: left;
  font-size: 20px;
  font-weight: bolder;
`;
export const Text2_2 = styled.div``;
export const Enter3 = styled.input`
  border: 1px black solid;
  border-radius: 5px;
  width: 500px;
  height: 40px;
  font-size: 20px;
  padding-left: 5px;
`;
export const Btn3 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  height: 80px;
  background-color: #9e9e9e;
  margin-top: 5%;
  border-color:white;
`;
// -------------------------------------------
export const RightForm2 = styled.div`
  min-width: 300px;
  z-index: 1;
  color: white;
  width: fit-content;
  text-align: center;
  margin-top: 0%;
  margin-left: 20%;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const Text2_3 = styled.div`
  font-size: 55px;
  font-weight: bolder;
`;
export const Text2_4 = styled.div`
  margin-top: 10%;
  font-size: 30px;
`;
export const Btn4 = styled.button`
  cursor: pointer;
  width: 100%;
  border: white 3px solid;
  border-radius: 5px;
  color: white;
  font-size: 32px;
  height: 80px;
  margin-top: 10%;
`;
// -------------------------------------------
export const style = {
  Container,
  Background,
  LeftForm1,
  Text1,
  Text2,
  Btn1,
  RightForm1,
  Text3,
  Text4,
  EnterForm,
  Text5,
  Enter1,
  Text6,
  Enter2,
  Btn2,
  LeftForm2,
  Text2_1,
  EnterForm2,
  Text2_2,
  Enter3,
  Btn3,
  RightForm2,
  Text2_3,
  Text2_4,
  Btn4,
};
