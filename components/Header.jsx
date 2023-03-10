import React, {useState} from 'react';
import Image from "next/legacy/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faGlobe, faUsers, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);


    const selectionRange = {

        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const  resetInput = () => {
        setSearchInput('')
    }

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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
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
            {searchInput && (
                <div className={'flex flex-col col-span-3 mx-auto'}>
                    <DateRangePicker
                    ranges={[selectionRange]}
                    minDay={new Date()}
                    rangeColors={['#FD5861']}
                    onChange={handleSelect}
                    />
                    <div className={'flex items-center border-b mb-4'}>
                        <h2 className={'text-2xl flex-grow font-semibold'}>Number of Guests</h2>
                        <FontAwesomeIcon icon={faUsers} className={'h-5'} />
                        <input
                            value={noOfGuests}
                            min={1}
                            onChange={(e) => setNoOfGuests(e.target.value) }
                            type="number"
                            className={'w-12 pl-2 text-lg outline-none text-red-400'}/>
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className={'flex-grow text-gray-500'}>Cancel</button>
                        <button className={'flex-grow text-red-400'}>Search</button>
                    </div>
                </div>
            ) }
        </header>

    )
}

export default Header;