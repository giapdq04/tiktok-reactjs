import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                        publicRoutes.map(route => {
                            // console.log('route: ',route.laryout);

                            let Layout = DefaultLayout

                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<Layout children={<route.component />} />}
                                />
                            )
                        })
                    }
                </Routes>

            </div>
        </Router>
    );
}

export default App;