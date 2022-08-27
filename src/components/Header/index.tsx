import * as S from './styles'
import { Scroll, Timer } from 'phosphor-react'

import LogoIgnite from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <S.Wrapper>
      <img src={LogoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={26} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </S.Wrapper>
  )
}
