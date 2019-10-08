import React from 'react';
import TableHeader from './components/table_header';
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
                    teams: data.rankingItems,
                    currentCat: ''
                });

                this.sortTeam('goalPlus');
            });
    }

    sortTeam = (filter) => {
        let teams = this.state.teams;

        switch(filter) {
            case 'reverse':
                teams.reverse();
              break;
            case 'competitor.name':
                teams.sort((a, b) => a['competitor']['name'].localeCompare(b['competitor']['name']));
              break;
            case 'rank':
                teams.sort(function(a, b) {
                    return a[filter] - b[filter];
                });
              break;
            default:
                teams.sort(function(a, b) {
                    return b[filter] - a[filter];
                });
          }
          if (filter !== 'reverse') {
            this.setState({currentCat: filter});
          }

        this.setState({teams: teams});
    }

    validateTable = () => {
        let teams = this.state.teams;
        let goals = { plus: 0, minus: 0 };

        teams.forEach(team => {
            goals.plus += team.goalPlus;
            goals.minus += team.goalMinus;
        });

        return goals.plus === goals.minus;
    }

    render() {
        let { groupData, teams, currentCat } = this.state;

        return (
        <div className="App">
            {teams ? (
                <table className={(this.validateTable() ? 'valid' : 'error')}>
                    <caption>{groupData}</caption>
                    <thead>
                        <tr>
                            <TableHeader title={'Rank'} filter={'rank'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Team'} filter={'competitor.name'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Played'} filter={'games'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Won'} filter={'gamesWon'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Draw'} filter={'gamesDraw'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Lost'} filter={'gamesLost'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'For'} filter={'goalPlus'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Against'} filter={'goalMinus'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Diff'} filter={'goalDifference'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
                            <TableHeader title={'Points'} filter={'points'} currentCat={currentCat} handleClick={this.sortTeam} handleReverse={this.sortTeam}></TableHeader>
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
