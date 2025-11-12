import { loadData } from '../utils/fileHandler.js'; // Must use named import { }

const FILENAME = 'therapists.json';

const getTherapistListings = (req, res) => {
    let therapists = loadData(FILENAME);
    
    const { specialty, location } = req.query;

    if (specialty && specialty !== 'All Specialties') {
        therapists = therapists.filter(t => 
            t.specialty.toLowerCase().includes(specialty.toLowerCase())
        );
    }
    
    if (location && location !== 'All Locations') {
        therapists = therapists.filter(t => t.location.toLowerCase().includes(location.toLowerCase()));
    }
    
    res.json(therapists);
};

export default {
    getTherapistListings,
};