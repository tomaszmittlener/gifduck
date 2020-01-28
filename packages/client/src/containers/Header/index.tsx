import React, { FunctionComponent, useState, FormEventHandler, ChangeEventHandler } from 'react'
import styled from 'styled-components'
import { useHistory, useLocation } from 'react-router-dom'
import { SearchQueryKeys } from '@gifduck/types/imagesService'

import Logo from 'components/Logo'
import { getQuery, mergeQueries, stringifyQuery } from 'common/queryString'

interface HeaderProps {
  className?: string
  testId?: string
}

const Container = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${({ theme: { layers } }) => layers.top};
  background-color: ${({ theme }) => theme.colors.grays.black};
`

const Wrapper = styled.div`
  ${({ theme }) => theme.grid.container()};
  margin: 0 auto;
`

const SearchForm = styled.form`
  ${({ theme }) => theme.grid.span(1, 8)};
  display: flex;
  padding: 0 0 ${({ theme }) => theme.ms(4)} 0;
`

const SearchButton = styled.button`
  height: ${({ theme }) => theme.ms(10)};
  width: ${({ theme }) => theme.ms(10)};
  border: none;
  background-color: ${({ theme }) => theme.colors.grays.white};
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
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
  border-radius: 10px 0 0 10px;
`

const StyledLogo = styled(Logo)`
  padding: ${({ theme }) => theme.ms(-2)} 0;
  ${({ theme }) => theme.grid.span(1, 8)};
  justify-self: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    justify-self: left;
    ${({ theme }) => theme.grid.span(1, 3)};
  }
`

const Header: FunctionComponent<HeaderProps> = ({ className, testId }) => {
  const [searchInput, setSearchInput] = useState<string>('')
  const history = useHistory()
  const location = useLocation()

  const updateSearch = () => {
    const query = getQuery(location.search)
    const newQuery = mergeQueries(query, { [SearchQueryKeys.searchText]: searchInput })
    const queryString = stringifyQuery(newQuery)
    history.replace({ search: queryString })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    updateSearch()
  }

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearchInput(e.target.value)
  }

  return (
    <Container data-testid={testId} className={className}>
      <Wrapper>
        <StyledLogo />
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput type="text" name="search" onChange={handleInputChange} placeholder="Search for Images..." />
          <SearchButton>🔎</SearchButton>
        </SearchForm>
      </Wrapper>
    </Container>
  )
}

export default Header
