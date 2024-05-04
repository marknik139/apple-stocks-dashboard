import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;