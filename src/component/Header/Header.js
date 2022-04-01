import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/tShirt'>Trshirt</CustomLink>
            {/* <Link></Link>
            <Link></Link> */}
        </div>
    );
};

export default Header;