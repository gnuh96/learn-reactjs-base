import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import PostFiltersForm from './components/PostFiltersForm';
import PostList from './components/PostList';

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
        title_like: '',
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

    function handleFiltersChange(newFilters) {
        // console.log('New filters :', newFilters);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        })
    }

    return (
        <div>
            <h1>Post List</h1>
            <PostFiltersForm onSubmit={handleFiltersChange} />
            <PostList postList={postList} />
            <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PostFeature;