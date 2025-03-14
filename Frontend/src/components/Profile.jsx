import React, { useState } from 'react';
import { FaBell, FaCaretDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Profile = ({ userName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [admissionNo, setAdmissionNo] = useState("");
    const [programStudy, setProgramStudy] = useState("");

    const handleUpdateProfile = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Admission No:", admissionNo);
        console.log("Program Study:", programStudy);
        handleCloseModal();
    };
    return (
        <div className="absolute top-4 left-230 bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-300">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg text-black font-bold">Profile</h1>
                <div className="flex items-center space-x-2 text-gray-500">
                    <FaBell className="cursor-pointer" />
                    <FaCaretDown className="cursor-pointer" />
                </div>
            </div>
            
            <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-300">
                <FaUserCircle className="text-gray-500 ml-6 mt-6" size={50} />
                </div>
                <h2 className="text-lg text-black font-semibold mb-2">{ userName || "John Doe"}</h2>
                <div className="text-gray-700 text-sm">
                    <p><span className="font-semibold">YEAR:</span> <span className="ml-10">3</span></p>
                    <p><span className="font-semibold">Admission No:</span> <span className="ml-4">{admissionNo || ""}</span></p>
                    <p><span className="font-semibold">PROGRAM STUDY:</span> <span className="ml-4">{programStudy || ""}</span></p>
                </div>
                <button onClick={handleUpdateProfile} className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-600">Update Profile</button>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black/40">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-bold mb-4">Update Profile</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">Admission No:</label>
                            <input type="text" className="border p-2 w-full mb-4" value={admissionNo} onChange={(e) => setAdmissionNo(e.target.value)} required />

                            <label className="block mb-2">Program of Study:</label>
                            <input type="text" className="border p-2 w-full mb-4" value={programStudy} onChange={(e) => setProgramStudy(e.target.value)} required />

                            <div className="flex justify-end">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">Cancel</button>
                                <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Profile;