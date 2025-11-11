import React from 'react';
import { MagnifyingGlassIcon, FunnelIcon, PhoneIcon } from '@heroicons/react/24/outline';

// Mock data for dropdowns based on images
const specialties = ['All Specialties', 'Anxiety', 'Depression', 'CBT', 'Trauma', 'Couples Therapy', 'Teen Therapy', 'ADHD'];
const locations = ['All Locations', 'San Francisco, CA', 'Los Angeles, CA', 'Austin, TX', 'Seattle, WA', 'New York, NY', 'Chicago, IL'];
const sessionTypes = ['All Types', 'In-Person', 'Video Call', 'Phone Call'];
const insurances = ['All Insurance', 'Aetna', 'Blue Cross Blue Shield', 'Cigna', 'UnitedHealthcare'];

// Simple Dropdown Component (Placeholder for functionality)
const CustomDropdown = ({ label, options, selectedValue, onChange }) => (
    <div className="relative">
        <select
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500 appearance-none bg-white pr-8 text-gray-700"
            value={selectedValue}
            onChange={onChange}
        >
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
        </div>
    </div>
);


const FindTherapistContent = () => {
    // State to simulate filters
    const [specialty, setSpecialty] = React.useState(specialties[2]); // Default to 'Depression'
    const [location, setLocation] = React.useState(locations[3]); // Default to 'Austin, TX'
    const [type, setType] = React.useState(sessionTypes[0]);
    const [insurance, setInsurance] = React.useState(insurances[0]);

    return (
        <div className='space-y-8'>
            
            {/* Crisis Warning Banner */}
            <div className='bg-red-50 border-l-4 border-red-500 rounded-lg p-5 flex justify-between items-center shadow-md'>
                <div className='flex items-center'>
                    <PhoneIcon className='w-6 h-6 text-red-500 mr-4' />
                    <div>
                        <p className='text-lg font-semibold text-red-700'>Need immediate support?</p>
                        <p className='text-sm text-red-600'>Crisis counselors available 24/7</p>
                    </div>
                </div>
                <a 
                    href="/crises-support" 
                    className="flex items-center px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
                >
                    Get Help Now
                </a>
            </div>

            {/* Find Your Perfect Match Filters */}
            <div className='bg-white rounded-2xl shadow-xl p-6'>
                <div className='flex items-center mb-6'>
                    <FunnelIcon className='w-6 h-6 text-violet-600 mr-2' />
                    <h2 className='text-xl font-bold text-gray-800'>Find Your Perfect Match</h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                    {/* Search Bar */}
                    <div className="md:col-span-3 relative">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name or specialty..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-violet-500 focus:border-violet-500"
                        />
                    </div>
                    
                    {/* Specialty Dropdown (e.g., Depression) */}
                    <CustomDropdown
                        label="Specialty"
                        options={specialties}
                        selectedValue={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                    />

                    {/* Location Dropdown (e.g., Austin, TX) */}
                    <CustomDropdown
                        label="Location"
                        options={locations}
                        selectedValue={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    
                    {/* Placeholder filter */}
                    <div className='h-full'></div> 
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {/* Type Dropdown (In-person, Video Call) */}
                    <CustomDropdown
                        label="All Types"
                        options={sessionTypes}
                        selectedValue={type}
                        onChange={(e) => setType(e.target.value)}
                    />

                    {/* Insurance Dropdown */}
                    <CustomDropdown
                        label="All Insurance"
                        options={insurances}
                        selectedValue={insurance}
                        onChange={(e) => setInsurance(e.target.value)}
                    />
                    
                    {/* Blank filter placeholder */}
                    <div className='h-full'></div>
                </div>

                <div className='mt-6 text-center'>
                    <p className='text-md font-semibold text-gray-500'>Found 0 therapists matching your criteria</p>
                    <button className="mt-4 px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                        Manage cookies or opt out
                    </button>
                </div>
            </div>

            {/* Placeholder Content for other tabs (Outlet will handle this in App.jsx) */}
            <div className='p-6 bg-white rounded-2xl shadow-xl'>
                 <h2 className='text-xl font-semibold'>Therapist Listings will appear here</h2>
                 <p className='text-gray-500 mt-2'>Filter and search to find a provider.</p>
            </div>
            
        </div>
    );
};

export default FindTherapistContent;