import { useState, useRef } from 'react'
import debounce from 'lodash.debounce'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

import { useSearchContext } from 'states/SearchProvider'

const Search = () => {
  const [barOpened, setBarOpened] = useState(false)
  const { setSearch } = useSearchContext()
  const formRef = useRef();
  const inputRef = useRef();

  const updateSearch = e => setSearch(e.target?.value)

  const debouncedOnChange = debounce(updateSearch, 200)

  return <Form
    barOpened={barOpened}
    onClick={() => {
      setBarOpened(true);
      inputRef.current.focus();
    }}
    onFocus={() => {
      setBarOpened(true);
      inputRef.current.focus();
    }}
    onBlur={() => {
      setBarOpened(false);
    }}
    onSubmit={e => e.preventDefault()}
    ref={formRef}
  >
    <Button type="submit" barOpened={barOpened}>
      <BiSearchAlt color="#fff" size="2.5rem" />
    </Button>
    <Input
      onChange={debouncedOnChange}
      ref={inputRef}
      barOpened={barOpened}
      placeholder="Search for github user..."
    />
  </Form>
}

export default Search

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  width: ${props => (props.barOpened ? "20rem" : "2rem")};
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;