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
        <p>first experience with nextjs</p>
      </Layout>
    </div>
  );
}
