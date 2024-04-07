import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPage(){
    return (
        <Layout>
            <Head>
                <title>Profile</title>
            </Head>
            <h3>
                Chinese Language & Literature | Information Systems, Hanyang University (2021.03 - now)
            </h3>
            <div>
                <h2>Hobby</h2>
                <h3>Playing Drums</h3>
                I have been interested in drums since I liked bands. 
                Now it has been more than two years since I learned drums.
                <h3>Photography</h3>
                It's easy to forget the moments when I only remember with my eyes. 
                So I wanted to capture every moment not only with my eyes but also with a camera. 
                Currently, I'm taking pictures diligently through the photography club.
            </div>
            <div>
                <h2>Skill</h2>
                <h3>Chinese - Fluent</h3>
            </div>
            <div>
                <h2>Contact</h2>
                <h3>Email: <a href='mailto:yeeun204601@naver.com'>yeeun204601@naver.com</a></h3>
                <h3>SNS: <a href='https://blog.naver.com/yeeun204601'>blog</a></h3>
            </div>
        </Layout>
    );
}