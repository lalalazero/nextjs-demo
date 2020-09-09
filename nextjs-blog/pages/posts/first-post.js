import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Title First Post</title>
        </Head>
        <h1>First Post</h1>
        <Link href="/">
          <a>back to home</a>
        </Link>
      </Layout>
    </div>
  );
}
