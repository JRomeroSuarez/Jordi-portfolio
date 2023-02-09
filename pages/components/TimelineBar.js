import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ArticleIcon from '@mui/icons-material/Article';
import MedicationIcon from '@mui/icons-material/Medication';
import { works } from '../../public/works.js';
import WorkCard from './Workcard.js';
import { useState } from 'react';




const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                ' linear-gradient(95deg, hsla(175, 84%, 32%, 1) 0%, hsla(284, 75%, 54%, 1) 100%);',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                ' linear-gradient(95deg, hsla(175, 84%, 32%, 1) 0%, hsla(284, 75%, 54%, 1) 100%);',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        backgroundImage:
            'linear-gradient( 136deg, hsla(175, 84%, 32%, 1) 0%, hsla(284, 75%, 54%, 1) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
        backgroundImage:
            'linear-gradient( 136deg, hsla(175, 84%, 32%, 1) 0%, hsla(284, 75%, 54%, 1) 100%)',
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <ArticleIcon />,
        2: <MedicationIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};


export default function CustomizedSteppers() {
    const [showCard, setShowCard] = useState([])
    const [cardVisible, setCardVisible] = useState(false)

    return (
        <Stack sx={{ width: '100%' }} spacing={4}>
            <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
                {works.map((label) => (
                    <Step key={label.title}>
                        <StepLabel onMouseEnter={() => { setCardVisible(true); setShowCard(label) }} onMouseLeave={() => setCardVisible(false)} StepIconComponent={ColorlibStepIcon} >
                            <h3 className="text-2xl font-medium pb-2 dark:text-gray-100">
                                {label.title}
                            </h3>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <WorkCard work={showCard} showCard={cardVisible} />
        </Stack >
    );
}