import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Post, getSortedPostsData } from '../lib/posts'
import Layout, {siteTitle} from "../components/layout"
import Date from '../components/date'
import utilStyles from './styles/utils.module.css'
import { 
    PostCard,
    PostCardGridContainer,
} from '../styles/homeStyles'

interface Props {
    allPostsData: Array<Post>;
}

const DEFAULT_COVER = 'https://i.imgur.com/zRG5yAE.png';

const Home: FC<Props> = ({ allPostsData }) => {
    return (
        <HomeDiv>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <ContentWrapper>                    
                <section 
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
                    style={{ marginTop: 20, }}
                >                    
                    <PostCardGridContainer>
                        {allPostsData.map(post => (
                            <PostCard key={post.id}>
                                <img 
                                    className="post-cover"
                                    src={DEFAULT_COVER} 
                                    alt="cover"
                                />

                                <Link href={`/posts/${post.id}`}>
                                    <a className="card-title">
                                        {post.title}
                                    </a>
                                </Link>
                                        
                                <br />
                                <small className="card-date">
                                    <Date dateString={post.date} />
                                </small>
                            </PostCard>
                        ))}
                    </PostCardGridContainer>
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
    //max-width: 36rem;
    padding: 0 1rem;
    margin: 0px auto 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    width: 90%;
`;

export default Home;