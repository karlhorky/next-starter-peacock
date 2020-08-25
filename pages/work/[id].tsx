import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import { getAllContentIds, getContentData } from "../../lib/content";

/**
 *  Renders work markdown posts
 */

const Article = ({ notesData }) => {
  const { pathname } = useRouter();
  const { title } = notesData;

  return (
    <Layout pageTitle={title} pathname={pathname}>
      {notesData.title}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllContentIds("work");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const notesData = await getContentData(params.id, "work");
  return {
    props: {
      notesData,
    },
  };
};

export default Article;