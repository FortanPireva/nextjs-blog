import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am Fortan Pireva, a distinguished software engineer</p>
        <p>
          A full-stack developer with a passion for building web applications
          using technlogies like React, Node, and Asp.Net Core.
        </p>
        <p>Web Development Skills</p>
        <ul>
          <li>Javascript</li>
          <li>Node.JS</li>
          <li>C#</li>
          <li>React</li>
          <li>ASP.NET Core</li>
        </ul>
        <p>Cloud & Devops Skills</p>
        <ul>
          <li>AWS</li>
          <li>GCP</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
