import React, { useState } from "react";

const Account = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [loading, setLoading] = useState(false); // State to track loading status
    const [manuscriptFormData, setManuscriptFormData] = useState({
        fullName: "",
        currPosition: "",
        affiliation: "",
        emailAddress: "",
        contact: "",
        citizenship: "",
        currAddress: "",
        awardsList: "",
        interest: "",
        manuFile: null,
        terms: "",
        subBy: ""
    });

    const [formPage, setFormPage] = useState(0);


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleSubmit = () => {
        
        setLoading(true); // Trigger loading state
        // Simulate an API call or any async operation
        setTimeout(() => {
            setLoading(false); // Disable loading state after operation
            alert("Form submitted successfully!");
        }, 2000);
    };

    if (loading) {
        return (
      
            <div class="flex-col gap-4 w-full items-center justify-center h-screen grid place-items-center z-40">
            <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red-700 rounded-full z-50">
              <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" class="animate-ping">  
              </svg>
            </div> 
            </div>
        );
    
    }

    const handleManuscriptChange = (e) => {
        const { id, value, files } = e.target;
        setManuscriptFormData((prevData) => ({
            ...prevData,
            [id]: files ? files[0] : value
        }));
    };

    const handleNext = () => {
        setFormPage((prevPage) => prevPage + 1);
    };

    const handleBack = () => {
        setFormPage((prevPage) => prevPage - 1);
    };

    const renderFormPage = () => {
        switch (formPage) {
            case 0:
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Full Name:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="fullName" 
                                type="text"
                                value={manuscriptFormData.title}
                                onChange={handleManuscriptChange}
                                placeholder="Full Name:"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currPosition">
                                Current Position:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="currPosition" 
                                type="text"
                                value={manuscriptFormData.currPosition}
                                onChange={handleManuscriptChange}
                                placeholder="Current Position:"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="affiliation">
                                Affiliation:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="affiliation" 
                                type="text"
                                value={manuscriptFormData.affiliation}
                                onChange={handleManuscriptChange}
                                placeholder="Affiliation"
                            />
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
                                Email Address:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="emailAddress" 
                                type="email"
                                value={manuscriptFormData.emailAddress}
                                onChange={handleManuscriptChange}
                                placeholder="Email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                                Contact no.   
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="contact" 
                                type="text"
                                value={manuscriptFormData.contact}
                                onChange={handleManuscriptChange}
                                placeholder="contact"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="citizenship">
                                Citizenship
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="citizenship" 
                                type="dropdown"
                                onChange={handleManuscriptChange}
                            />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                         <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currAddress">
                                Current Address:
                            </label>
                            <textarea 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="currAddress" 
                                value={manuscriptFormData.currAddress}
                                onChange={handleManuscriptChange}
                                placeholder=""
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="awardsList">
                                List of Awards:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="awardsList" 
                                type="text"
                                value={manuscriptFormData.awardsList}
                                onChange={handleManuscriptChange}
                                placeholder=""
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interest">
                                Interest:
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="interest" 
                                type="text"
                                value={manuscriptFormData.funding}
                                onChange={handleManuscriptChange}
                                placeholder="Interest:"
                            />
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manuFile">
                                Manuscript File (Maximum of 3mb):
                            </label>
                            <input 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="manuFile" 
                                type="file"
                                onChange={handleManuscriptChange.manuFile}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="terms">
                                Terms and conditions here
                            </label>
                            <textarea 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="terms" 
                                type="radio"
                                onChange={handleManuscriptChange.terms}
                            />
                            
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subBy">
                                Submitted By:
                            </label>
                            <textarea 
                                className="shadow appearance-none border-2 rounded border-black w-full py-2 px-3 placeholder-gray-500 text-black leading-tight focus:outline-none focus:shadow-outline" 
                                id="subBy" 
                                type="text"
                                onChange={handleManuscriptChange.subBy}
                            />
                            
                        </div>
                        
                    </>
                );
                
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <div className="flex-grow flex pt-20">  
                <div className="w-60 p-4 border border-black border-b-0 bg-gray-300">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-black pb-2 pt-2 text-center">MENU</h2>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Home" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Home")}
                    >
                        Home
                    </button>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Dashboard" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Dashboard")}
                    >
                        Dashboard
                    </button>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Submit Manuscript" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Submit Manuscript")}
                    >
                        Submit Manuscript
                    </button>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Manuscripts" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Manuscripts")}
                    >
                        Manuscripts
                    </button>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Discussions" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Discussions")}
                    >
                        Discussions
                    </button>
                    <button
                        className={`w-full py-2 px-4 text-left ${activeTab === "Contact Us" ? "bg-gray-500" : ""}`}
                        onClick={() => handleTabClick("Contact Us")}
                    >
                        Contact Us
                    </button>
                </div>
                <div className="tabcontent w-full p-4 border border-gray-300 border-l-0 overflow-y-auto bg-white">
                    <h2 className="text-2xl font-bold text-center">{activeTab}</h2>
                    {activeTab === "Home"}
                    {activeTab === "Dashboard"}
                    {activeTab === "Submit Manuscript" && (
                        <div className="flex flex-col min-h-screen">
                            <div className="flex items-center justify-center flex-grow bg-gray-300">
                                <form className="bg-white p-6 rounded shadow-md border-2 border-black w-full max-w-sm">
                                    {renderFormPage()}
                                    <div className="flex justify-between mt-4">
                                        {formPage >= 0 && (
                                            <button 
                                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                type="button"
                                                onClick={handleBack}
                                            >
                                                Back
                                            </button>
                                        )}
                                        {formPage < 3 &&  (
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                Next
                                            </button>
                                        )}
                                            {formPage >= 3 && (
                                                <button
                                                type="submit"
                                                onClick={handleSubmit}
                                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                Submit
                                            </button>
                                            )}
                                      

                                        
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Account;
