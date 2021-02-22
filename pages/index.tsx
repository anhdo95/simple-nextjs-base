import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { getUserProfile } from '@store/user';
import Layout from '@components/Layout';

const IndexPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
