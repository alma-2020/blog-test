import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { Post, getSortedPostsData } from '../lib/posts'
import Layout, {siteTitle} from "../components/layout"
import Date from '../components/date'
import utilStyles from './styles/utils.module.css'
import { 
    PostCardDiv,
    PostCardGridContainer,
} from '../styles/homeStyles'

interface Props {
    allPostsData: Array<Post>;
}

interface PostCardProps {
    post: Post; 
    key: string;
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
                            <PostCard 
                                key={post.id} 
                                post={post} 
                            />
                        ))}
                    </PostCardGridContainer>
                </section>
            </ContentWrapper>
        </HomeDiv>
    );
};

const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <PostCardDiv>
            <div 
                className="post-cover"
                style={{ backgroundImage: `url("${DEFAULT_COVER}")` }}
            >
            </div>

            <Link href={`/posts/${post.id}`}>
                <a className="card-title">
                    {post.title}
                </a>
            </Link>

            <div className="card-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>

               <div className="card-read-more">
                    <Link href={`/posts/${post.id}`}>
                        <a>Read more</a>
                    </Link>
                </div>
            </div>
                                        
            <small className="card-date">
                <Date dateString={post.date} />
            </small>
        </PostCardDiv>
    );
}

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