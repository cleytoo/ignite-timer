import * as S from './styles'
import { useCycles } from '../../../../context/CyclesContext'
import { useFormContext } from 'react-hook-form'

export const NewCycleForm = () => {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <S.NewCycleFormcContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
        <option value="Projeto 03" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        {...register('minutesAmount', { valueAsNumber: true })}
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
      />
      <span>minutos.</span>
    </S.NewCycleFormcContainer>
  )
}
