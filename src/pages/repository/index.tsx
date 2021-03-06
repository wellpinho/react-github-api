import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import Logo from './../../assets/logo.svg'

interface IParams {
  repository: string
}

export const Repository: React.FC = () => {
  const { params } = useRouteMatch<IParams>()

  return (
    <>
      <Header>
        <img src={Logo} alt="" />
        <Link to="/">
          <FiChevronsLeft />
          voltar
        </Link>
        Repositorios {params.repository}
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="Wellington Pinho" />
          <div>
            <strong>wellpinho/love-rev2</strong>
            <p>Repositório do curso gratuito de react js</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>2334</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>210</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>79</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>titulo da issue</strong>
            <p>descrição da issue</p>
          </div>
          <FiChevronsRight size="20" />
        </Link>
      </Issues>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color .2s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-left: 4px;
    }
  }
`

const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #737380;
      }
    }
  }
`

const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: none.2s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 16px;
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
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`