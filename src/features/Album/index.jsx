import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Chào xuân mới',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/b/4/2/ab42cbba95df6226fdc5b3488d157b04.jpg',
        },
        {
            id: 2,
            name: 'Giai điệu chữa lành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/6/6/9/4669fc40ac79afeae012c7c661128e33.jpg',
        },
        {
            id: 3,
            name: 'Happy Time',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/3/5/3/8/35386e480a012a5da850dc9c1d5ba8e1.jpg',
        },
    ];
    return (
        <div>
            <h3>Vui đón Tết</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;