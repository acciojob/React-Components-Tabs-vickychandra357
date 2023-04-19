import React, { useState } from 'react'

const Tab = () => {
    const [activeTab, setActiveTab] = useState("");

    const handleTabClick = (tabName) =>{
        setActiveTab(tabName);
    }
    return (
        <div className="tabs">
            <div className="tab" id="Home-tab" onClick={()=> handleTabClick("Home")}>Home</div>
            <div className="tab" id="About-tab" onClick={()=> handleTabClick("About")}>About</div>
            <div className="tab" id="Features-tab" onClick={() => handleTabClick("Features")}>Features</div>
            <div className="viewport">Pages Go Here for {activeTab}</div>
        </div>
    )
}

export default Tab