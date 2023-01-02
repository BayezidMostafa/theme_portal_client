import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { BarLoader, SyncLoader } from 'react-spinners';
import Button from '../../../Components/Button/Button';
import { LoaderSmall } from '../../../Styles/Index';
import ShowCaseCard from './ShowCaseCard';
import { LoadMoreButtonContainer, ShowCaseData, ShowCaseHeader, ShowCaseSection } from './ThemeShowCaseStyle';

const ThemeShowCase = () => {

    const [size, setSize] = useState(3);

    const { data: themes = [], isLoading, refetch } = useQuery({
        queryKey: ['themes'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/themes?size=${size}`)
            return res.data

        }
    })

    const sizeIncreaser = () => {
        setTimeout(() => {
            refetch()
        })
        setSize(size + 3);
    }


    return (
        <>
            <ShowCaseSection>
                <ShowCaseHeader>
                    Our Template is Just Ready to Use!
                </ShowCaseHeader>
                {
                    isLoading ?
                        <>
                            <LoaderSmall>
                                <SyncLoader color="#2e5248" />
                            </LoaderSmall>
                        </>
                        :
                        <>
                            <ShowCaseData>
                                {
                                    themes.map(theme => <ShowCaseCard key={theme._id} theme={theme} />)
                                }
                            </ShowCaseData>
                        </>
                }
                <LoadMoreButtonContainer>
                    <Button style={{ width: '20%' }} onClick={sizeIncreaser}>{
                        isLoading ? <><BarLoader color="#ffffff" /></> : <>Load More</>
                    }</Button>
                </LoadMoreButtonContainer>
            </ShowCaseSection>

        </>
    );
};




export default ThemeShowCase;