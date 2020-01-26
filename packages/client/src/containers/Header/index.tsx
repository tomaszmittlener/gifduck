import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Logo from 'components/Logo'

const Container = styled.header`
  position: sticky;
  top: 0;
  display: block;
  width: 100%;
  z-index: ${({ theme: { layers } }) => layers.top};
  background-color: ${({ theme }) => theme.colors.grays.black};
`

const SearchForm = styled.form`
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

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Logo />
      <SearchForm>
        <SearchInput />
        <SearchButton>🔎</SearchButton>
      </SearchForm>
    </Container>
  )
}

export default Header
