import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { SyncLoader } from 'react-spinners';
import Button from '../../../Components/Button/Button';
import ShowCaseCard from './ShowCaseCard';
import { ShowCaseData, ShowCaseHeader, ShowCaseSection } from './ThemeShowCaseStyle';

const ThemeShowCase = () => {

    const [size, setSize] = useState(3);



    console.log(size);

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

    console.log(themes);



    return (
        <>
            <ShowCaseSection>
                <ShowCaseHeader>
                    Our Template is Just Ready to Use!
                </ShowCaseHeader>
                {
                    isLoading ?
                        <>
                            <SyncLoader color="#36d7b7" />
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
                <Button style={{width: '20%'}} onClick={sizeIncreaser}>Load More</Button>
            </ShowCaseSection>

        </>
    );
};




export default ThemeShowCase;