import * as S from './styles'

export const History = () => {
  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 7 }).map((_, index) => (
              <tr key={index}>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <S.Status statusColor="green">Concluído</S.Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
