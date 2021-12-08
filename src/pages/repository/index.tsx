import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { FiChevronsLeft } from 'react-icons/fi'
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