import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import Pagination from '../../components/Pagination';

PostFeature.propTypes = {

};

function PostFeature(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
    })

    useEffect(() => {
        async function fetchPostlist() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const reponse = await fetch(requestUrl);
                const reponseJSON = await reponse.json();
                // console.log({ reponseJSON });

                const { data, pagination } = reponseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch post list: ', error.message);
            }
        }
        fetchPostlist();
    }, [filters]);

    function handlePageChange(newPage) {
        // console.log('New page: ', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        });
    }
    return (
        <div>
            <h1>Post List</h1>
            <PostList postList={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PostFeature;