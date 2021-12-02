import Card, { CardSection } from '@components/Card'
import Link from "next/link";
import { NextPage } from 'next';

const tails = [
  "best-hello-ever",
  "best-hello-world-ever",
  "best-world-ever"
];

const Home: NextPage = () => {
  return (
    <>
      {tails.map(tail => {
        return <CardSection key={tail}>
          <Link href={`/${tail}`}>
            {tail}
          </Link>
        </CardSection>
      })}
    </>
  )
}

export default Home
