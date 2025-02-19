import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ProgressBar = () => {
    const location = useLocation();
    const navigationType = useNavigationType(); // Detects push, replace, or pop navigation

    useEffect(() => {
        if (navigationType === "PUSH") { 
            NProgress.start();
        }

        const timer = setTimeout(() => {
            NProgress.done();
        }, 300); 

        return () => {
            clearTimeout(timer);
        };
    }, [location, navigationType]);

    return null;
};

export default ProgressBar;
