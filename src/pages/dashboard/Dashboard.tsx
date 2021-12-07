import styled from "styled-components";
import logo from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'
import { api } from '../../api'
import React from "react";

interface IGithubRepository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

export const Dashboard: React.FC = () => {
  const [repository, setRepository] = React.useState<IGithubRepository[]>([])
  const [newRepository, setNewRepository] = React.useState('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewRepository(event.target.value)
  }

  async function handleAddRepository(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const response = await api.get<IGithubRepository>(`repos/${newRepository}`)
    const repositoryData = response.data

    setRepository([...repository, repositoryData])
    setNewRepository('')
  }

  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Lista de repositórios do Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="username/repository_name"
          onChange={handleInputChange}
        />
        <button type="submit">Buscar</button>
      </Form>

      <Repositories>
        {repository.map(item => {
          return (
            <a href="/repositories" key={item.full_name}>
              <img src={item.owner.avatar_url} alt={item.owner.login} />
              <div>
                <strong>{item.full_name}</strong>
                <p>{item.description}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          )
        })}
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
