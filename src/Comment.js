import React from 'react';


class CommentApp extends React.Component {
    constructor(props) {
        super(props);
    this.state = { items: [], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div>
                <h3>Comment</h3>
                <CommentList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        id = "new-todo"
                        onChange={this.handleChange}
                        value={this.state.text.date}
                    />
                    <button type="submit">
                        コメントする
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
        console.log(e.target.value);
        
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        console.log(newItem);
        
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class CommentList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

export default CommentApp;