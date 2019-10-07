import React from 'react';
import './App.css';

const API = 'https://sport.api.swisstxt.ch/v1/rankings/8481?lang=de';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupData: '',
            teams: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    groupData: data.sport.name + ' - ' + data.reference.name,
                    teams: data.rankingItems
                });

                this.sortTeam('goalPlus');
            });
    }

    sortTeam(filter) {
        let teams = this.state.teams;

        teams.sort(function(a, b) {
            return b[filter] - a[filter];
        });

        this.setState({teams: teams});
    }

    render() {
        let { groupData, teams } = this.state;

        return (
        <div className="App">
            {teams ? (
                <table>
                    <caption>{groupData}</caption>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Draws</th>
                            <th>Lost</th>
                            <th>For</th>
                            <th>Against</th>
                            <th>Diff</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map(team =>
                            <tr key={team.competitor.id}>
                                <td>{team.rank}</td>
                                <td>{team.competitor.name} </td>
                                <td>{team.games}</td>
                                <td>{team.gamesWon}</td>
                                <td>{team.gamesDraw}</td>
                                <td>{team.gamesLost}</td>
                                <td>{team.goalPlus}</td>
                                <td>{team.goalMinus}</td>
                                <td>{team.goalDifference}</td>
                                <td>{team.points}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : (
                <h1>Data unavailable</h1>
            )}
        </div>
        );
    }
}

export default App;
