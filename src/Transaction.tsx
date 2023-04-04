import { FragmentType, useFragment } from './gql/fragment-masking'
import { graphql } from './gql'

export const TransactionFragment = graphql(/* GraphQL */ `
  fragment TransactionItem on CasaTransaction {
    amount
    valueDate
  }
`)

const Transaction = (props: { transaction: FragmentType<typeof TransactionFragment> }) => {
  const transaction = useFragment(TransactionFragment, props.transaction)
  return (
    <div>
      <h3>{transaction.amount}</h3>
      <p>{transaction.valueDate}</p>
    </div>
  )
}

export default Transaction