import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo'

const Container = styled.header`
  ${({ theme }) => theme.grid.container()};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${({ theme: { layers } }) => layers.top};
  background-color: ${({ theme }) => theme.colors.grays.black};
`

const SearchForm = styled.form`
  ${({ theme }) => theme.grid.span(1, 8)};
  display: flex;
`

const SearchButton = styled.button`
  height: ${({ theme }) => theme.ms(10)};
  width: ${({ theme }) => theme.ms(10)};
  border: none;
  background-color: ${({ theme }) => theme.colors.grays.white};
  padding: 0;
  margin: 0;
  cursor: pointer;
`

const SearchInput = styled.input`
  border: none;
  line-height: 1.75;
  height: ${({ theme }) => theme.ms(10)};
  color: ${({ theme }) => theme.colors.primary.default};
  background-color: ${({ theme }) => theme.colors.grays.white};
  font-size: ${({ theme }) => theme.ms(0)};
  font-family: ${({ theme }) => theme.typography.fonts.default};
  padding: 0 ${({ theme }) => theme.ms(0)};
  width: 100%;
`

const StyledLogo = styled(Logo)`
  ${({ theme }) => theme.grid.span(1, 8)};
  justify-self: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    justify-self: left;
    ${({ theme }) => theme.grid.span(1, 3)};
  }
`

const Header: FunctionComponent = () => {
  return (
    <Container>
      <StyledLogo />
      <SearchForm>
        <SearchInput />
        <SearchButton>🔎</SearchButton>
      </SearchForm>
    </Container>
  )
}

export default Header
