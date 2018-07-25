import React, { Component } from 'react';

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: "draft"},
    { title: 'Post Two', content: 'Post content', status: "published"},
    { title: 'Post Three', content: 'Post content', status: "published"},
    { title: 'Post Four', content: 'Post content', status: "published"}
];

//Functional component (should be in own file with react imported)
export const JournalEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

//Class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting:'Hi there',
            isOpen: true
        };
    }

    clearEntries = () => {
        this.setState({ journalData: [] });
    };

    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true });
    };

    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false});
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true});
        }
    };

    render() {
            const journalEntries = this.state.journalData.map(asdf => {
                return (
                    <div key={JournalEntry.title}>
                        <JournalEntry 
                            title={asdf.title} 
                            content={asdf.content} 
                        />
                    </div>
                );
            });
        return (
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}

                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show All Journal Entries</button>
                <button onClick={this.toggleStatus}>Toggle Entries</button>
            </div>
        );
    }
}