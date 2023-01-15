import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';

PostFeature.propTypes = {

};

function PostFeature(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function fetchPostlist() {
            try {
                const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
                const reponse = await fetch(requestUrl);
                const reponseJSON = await reponse.json();
                // console.log({ reponseJSON });

                const { data } = reponseJSON;
                setPostList(data);
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message);
            }
        }
        fetchPostlist();
    }, []);
    return (
        <div>
            <h1>Post List</h1>
            <PostList postList={postList} />
        </div>
    );
}

export default PostFeature;