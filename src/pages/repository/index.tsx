import { useRouteMatch } from "react-router-dom";

interface IParams {
  repository: string
}

export const Repository: React.FC = () => {
  const { params } = useRouteMatch<IParams>()

  return (
    <h1>Repositorios {params.repository}</h1>
  );
}

