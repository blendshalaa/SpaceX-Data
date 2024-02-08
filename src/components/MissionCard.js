import "../styles/missionCard.css";

import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../components/missionsActions';

export default function MissionCard({ mission }) {
    const dispatch = useDispatch();

    const handleJoinLeave = () => {
        if (mission.reserved) {
            dispatch(leaveMission(mission.mission_id));
        } else {
            dispatch(joinMission(mission.mission_id));
        }
    };

    return (
        <div key={mission.mission_id} className="mission-item">
            <h2 className="mission-name">{mission.mission_name}</h2>
            <p className="reserved-paragraph">
                {mission.reserved ? "Mission Reserved" : "Mission Available"}
            </p>
            <p className="mission-description">{mission.description}</p>
            <button className="reservation-button" onClick={handleJoinLeave}>
                {mission.reserved ? "Leave Mission" : "Join Mission"}
            </button>
        </div>
    );
}

