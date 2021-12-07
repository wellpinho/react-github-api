import styled from "styled-components";
import logo from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Lista de repositórios do Github</Title>

      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repositories>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/9344482?v=4" alt="Repositorio" />
          <div>
            <strong>wellpinho/react-github-api</strong>
            <p>Repositorio do curso de ReactJS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

const Title = styled.h1`
  font-size: 4.25rem;
  color: #3a3a3a;
  max-width: 45rem;
  line-height: 5.6rem;
  margin-top: 8rem;
`

const Form = styled.form`
  max-width: 70rem;
  margin-top: 4rem;
  display: flex;

  input {
    flex: 1;
    height: 4.375rem;
    padding: 0 2.4rem;
    border: .2rem solid #fff;
    border-radius: .5rem 0 .5rem;
    color: #3a3a3a;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`

const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
