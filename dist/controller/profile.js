"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const getProfileDetails = (req, res, next) => {
    const { slack_name } = req.query;
    const { track } = req.query;
    const currentUTC = new Date();
    const currentDateTime = currentUTC.toISOString();
    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentUTC.getUTCDay()];
    const slackProfile = {
        slack_name: slack_name,
        current_day: currentDayOfWeek,
        utc_time: currentDateTime,
        track: track,
        github_file_url: ``,
        github_repo_url: `https://github.com/Samuel-Adeyeye/StageOne-HNGX`,
        status_code: 200,
    };
    try {
        res.send(slackProfile);
    }
    catch (error) {
        next(error);
    }
};
exports.getProfileDetails = getProfileDetails;
