import styled from "styled-components";
import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Lista de repositórios do Github</Title>

      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
}

const Title = styled.h1`
  font-size: 4.8rem;
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
