import React from 'react'
import { useQuery } from '@apollo/client'

import './App.css'

import Film from './Film'
import { graphql } from '../src/gql'

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          ...FilmItem
        }
      }
    }
  }
`)


function App() {
  // `data` is typed!
  const { data } = useQuery(allFilmsWithVariablesQueryDocument, { variables: { first: 10 } })
  return (
    <div className="App">
        <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        {data && <ul>{data.allFilms?.edges?.map((e, i) => e?.node && <Film film={e?.node} key={`film-${i}`} />)}</ul>}
      </header>
    </div>
  )
}

export default App