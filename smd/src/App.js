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

        if (filter !== 'reverse') {
            teams.sort(function(a, b) {
                return b[filter] - a[filter];
            });
        }
        else {
            teams.reverse();
        }

        this.setState({teams: teams});
    }

    validateTable() {
        let teams = this.state.teams;
        let goals = { plus: 0, minus: 0 };

        teams.forEach(team => {
            goals.plus += team.goalPlus;
            goals.minus += team.goalMinus;
        });

        return goals.plus === goals.minus;
    }

    render() {
        let { groupData, teams } = this.state;

        return (
        <div className="App">
            {teams ? (
                <table className={(this.validateTable() ? 'valid' : 'error')}>
                    <caption>{groupData}</caption>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Team</th>
                            <th>Played</th>
                            <th>Won</th>
                            <th>Draws</th>
                            <th>Lost</th>
                            <th>
                                For
                                <button className="reverse-btn" onClick={this.sortTeam.bind(this,'reverse')}>
                                    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="reverse-icon"><path fill="currentColor" d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>
                                </button>
                            </th>
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
