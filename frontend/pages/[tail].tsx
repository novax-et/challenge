import { useMemo } from 'react';
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { gql, QueryOptions } from '@apollo/client';
import apolloClient from '../src/services/apolloClient';
import data from "../data.json";
import Layout from "@components/Layout";
import Card from '@components/Card';
import Typography from '@components/Typography';

type JsonId = number | null;

interface ViewTailProps {
  jsonId: JsonId
}

const ViewTail = ({ jsonId }: ViewTailProps) => {
  const pageData: {
    title: string;
    description?: string;
  } | undefined = useMemo(() => {
    return jsonId && data.find(({ id }) => id === jsonId) || {
      title: "Not exists",
    };
  }, [jsonId]);

  const { title, description } = pageData;

  return <>
    <Head>
      <title>
        {title}
      </title>
      {description && (
        <meta name="description" content={description} />
      )}
    </Head>

    <Typography as="h1" mb="xs" variant="title">
      {title}
    </Typography>
    {description && (
      <Typography variant="description">
        {description}
      </Typography>
    )}
  </>
}

export const getServerSideProps: GetServerSideProps<ViewTailProps, { tail: string }> = async ({ params }) => {
  let jsonId: JsonId = null;

  try {
    const { data } = await apolloClient.query<{
      long_tails_by_pk: {
        json_id: JsonId
      }
    }>({
      query: gql`
        query GetJsonId($tail: String!) {
          long_tails_by_pk(tail: $tail) {
            json_id
          }
        }
      `,
      variables: {
        tail: params?.tail || ""
      }
    });

    jsonId = data.long_tails_by_pk.json_id;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      jsonId
      // data,
    },
  }
}

export default ViewTail
