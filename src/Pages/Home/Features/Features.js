import React from 'react';
import DevicesIcon from '@mui/icons-material/Devices';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { FeatureCardText, FeatureCardTitle, FeaturesCard, FeaturesCardContainer, FeaturesIcon } from './FeaturesStyle';
import { Box } from '@mui/system';

const Features = () => {

    const DeviceIcon = <DevicesIcon sx={{height: "5rem", width: "5rem"}} />
    const ResourceIcon = <DocumentScannerIcon sx={{height: "5rem", width: "5rem"}} />
    const GearIcon = <SettingsSuggestIcon sx={{height: "5rem", width: "5rem"}} />
    const Icon = <HistoryEduIcon sx={{height: "5rem", width: "5rem"}} />
    const FontIcon = <FontDownloadIcon sx={{height: "5rem", width: "5rem"}} />
    const UpdateIcon = <BrowserUpdatedIcon sx={{height: "5rem", width: "5rem"}} />

    const features = [
        {
            icon: DeviceIcon,
            title: "Fully Responsive Layout",
            details: "All the pages of this theme are responsive. We used Styled Component to build the website. It's the best in class."
        },
        {
            icon: ResourceIcon,
            title: "Resourceful Pages",
            details: "All the pages are created based on real content that you will need to run your business. Change image and text and you're good to go!"
        },
        {
            icon: GearIcon,
            title: "Highly Customizable",
            details: "Our template is fully customizable. You can change color combination, fonts, icons, contents, images etc. You can also add custom css."
        },
        {
            icon: Icon,
            title: "Best Icon From MUI",
            details: "We are providing the best-looking icon from MUI. Also, you can change the icon easily following your need. It's easy to customized"
        },
        {
            icon: FontIcon,
            title: "Professional Font",
            details: "A vast collection of Professional fonts are integrated with the theme. You can use any of them that goes with your branding."
        },
        {
            icon: UpdateIcon,
            title: "Lifetime Update",
            details: "Purchase our theme only once and get lifetime updates. We keep updating our products to stay up to date with latest trends and technology."
        }
    ]

    return (
        <FeaturesCardContainer>
            {
                features.map((feature, index) =>
                    <FeaturesCard key={index} >
                        <Box>
                            {feature.icon}
                        </Box>
                        <FeatureCardTitle>
                            {feature.title}
                        </FeatureCardTitle>
                        <FeatureCardText>
                            {feature.details}
                        </FeatureCardText>
                    </FeaturesCard>)
            }
        </FeaturesCardContainer>
    );
};

export default Features;