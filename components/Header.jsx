import React from 'react';
import Image from "next/legacy/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faGlobe, faUsers, faUserCircle } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    return (
        <header className={'sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'}>
            <div className={"relative flex items-center h-10 cursor-pointer my-auto"}>
                <Image src={'https://links.papareact.com/qd3'}
                       alt={'airbnb logo'}
                       layout={'fill'}
                       objectFit={'contain'}
                       objectPosition={'left'}
                />
            </div>
            <div className={'flex items-center md:border-2 rounded-full md:shadow-sm'}>
                <input
                    type={'text'}
                    placeholder={'Start your search'}
                    className={'flex-grow pl-5 bg-transparent outline-none'}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                className={'hidden md:inline-flex h-8 cursor-pointer md:mx-2 p-2 rounded-full text-red-400'}
                />

            </div>
            <div className={'flex items-center justify-end text-gray-600 space-x-6'}>
                <p className={'hidden md:inline'}>Welcome host</p>
                <FontAwesomeIcon icon={faGlobe}
                                className={'h-6'}
                />

                <div className={'flex items-center space-x-2 border-2 rounded-full p-2 '}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={'h-6'}
                    />
                    <FontAwesomeIcon icon={faUserCircle}
                                     className={'h-6'}
                                     />
                </div>
            </div>
        </header>

    )
}

export default Header;