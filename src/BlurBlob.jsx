import PropTypes from 'prop-types';
import React from 'react';

const BlurBlob = ({position,size}) => {
    const {top, left} = position;
    const {width, height} = size;

    return (
        <div className='absolute'
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className='w-full h-full animate-blob bg-purple-500 rounded-full blur-3xl opacity-20'>

            </div>

        </div>
    );
};


// Define prop types
BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }).isRequired,
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }).isRequired,
};

export default BlurBlob;