import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Tweet extends Component {

    toParnet = (e, parent) => {
        e.preventDefault();

        //Todo redirect to parent tweet
    }

    handleLike = (e) => {
        e.preventDefault()

        // todo: Handle Like Tweet
    }

    render() {
        const { tweet } = this.props;
        if (tweet === null)
            return (<p>This Tweet does not exist!</p>)

        const {
            name, avatar, timestamp, text, hasLiked, likes, replies, parent
        } = tweet


        return (
            <div className='tweet'>
                <img
                    src={avatar}
                    alt={`Avaltar of ${name}`}
                    className='avatar' />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div className=''>{formatDate(timestamp)}</div>
                        {parent && (
                            <button className='replying-to'
                                onClick={(e) => this.toParnet(e, parent)}>
                                replying to @{parent.author}
                            </button>
                        )}
                        <p>{text}</p>
                    </div>
                    <div className='tweet-icons'>
                        <TiArrowBackOutline className='tweet-icon' />
                        <span>{replies !== 0 && replies}</span>
                        <button className='heart-button' onClick={this.handleLike}>
                            {hasLiked === true
                                ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                                : <TiHeartOutline className='tweet-icon' />}
                        </button>
                        <span>{likes !== 0 && likes}</span>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet)