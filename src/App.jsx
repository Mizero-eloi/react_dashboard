import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" postion="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed bg-white sidebar dark:bg-secondary-dark-bg ">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed mg:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="Ecommerce" />
              <Route path="/ecommerce" element="Ecommerce" />

              {/* pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/employees" element="Employees" />
              <Route path="/customers" element="Ecommerce" />

              {/* Apps */}
              <Route path="/kanban" element="Ecommerce" />
              <Route path="/editor" element="Ecommerce" />
              <Route path="/calendar" element="Ecommerce" />
              <Route path="/color-picker" element="Ecommerce" />

              {/* Charts */}
              <Route path="/line" element="Ecommerce" />
              <Route path="/area" element="Ecommerce" />
              <Route path="/bar" element="Ecommerce" />
              <Route path="/pie" element="Ecommerce" />
              <Route path="/financial" element="Ecommerce" />
              <Route path="/color-mapping" element="Ecommerce" />
              <Route path="/pyramid" element="Ecommerce" />
              <Route path="/line" element="Ecommerce" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
