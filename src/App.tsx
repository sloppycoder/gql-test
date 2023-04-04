import React from 'react'
import { useQuery } from '@apollo/client'

import './App.css'

import Transaction from './Transaction'
import { graphql } from '../src/gql'

const ACCOUNT_QUERY = graphql(/* GraphQL */ `
  query CasaAccount($accountId: String!, $first: Int!) {
    CasaAccount(accountId: $accountId) {
      transactions(first: $first) {
        edges {
          node {
            ...TransactionItem
          }
        }
      }
    }
  }
`)


function App() {
  // `data` is typed!
  const { data } = useQuery(ACCOUNT_QUERY, { variables: { first: 10, accountId: "123" } })
  console.log(data)
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
        {data && <ul>{data?.CasaAccount?.transactions?.edges?.map((e, i) => e?.node && <Transaction transaction={e.node} key={`trx-${i}`} />)}</ul>}
      </header>
    </div>
  )
}

export default App