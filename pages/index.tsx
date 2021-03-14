import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Post, getSortedPostsData } from '../lib/posts'
import Layout, {siteTitle} from "../components/layout"
import Date from '../components/date'
import utilStyles from './styles/utils.module.css'

interface Props {
    allPostsData: Array<Post>;
}

const Home: FC<Props> = ({ allPostsData }) => {
    return (
        <HomeDiv>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <ContentWrapper>
            <section className={utilStyles.headingMd}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </section>
                
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                
                <ul className={utilStyles.list}>
                    {allPostsData.map(post => (
                        <li className={utilStyles.listItem} key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                            
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={post.date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            </ContentWrapper>
        </HomeDiv>
    );
};

export const getStaticProps = async () => {
    const allPostsData = await getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    };
}

const HomeDiv = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
`;

export default Home;