import React from 'react';
import Header from '../component/Header';
import styled from 'styled-components';
import Backgroundimage from '../component/Backgroundimage';
const Signup = () => {
  return (
    <Container>
      <Backgroundimage />
      <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input type="email"placeholder="Email address"className="input" />
            <input type="password" placeholder="Password"className="input"/>
            <button>Get Started</button>

          </div>
         <button >Log In</button>
        </div>
      </div>
    </Container>
  );
}

export default Signup;

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
     
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .input{
        font-size: 1.25rem;
      }
  
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  
`;
