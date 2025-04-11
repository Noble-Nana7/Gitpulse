// controllers/userController.js

exports.getUser = (req, res) => {
    // Logic to fetch user information
    res.json({ message: 'User information' });
};

exports.getActivity = (req, res) => {
    // Logic to fetch activity
    res.json({ message: 'User activity data' });
};

exports.getChart = (req, res) => {
    // Logic to fetch chart data
    res.json({ message: 'Chart data' });
};
