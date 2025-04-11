// Simulating activity data (this can later be replaced by a database or file)
const getActivity = (req, res) => {
  const activityData = {
    commits: 120,
    pullRequests: 10,
    issues: 5
  };
  res.json(activityData);
};

module.exports = getActivity;
