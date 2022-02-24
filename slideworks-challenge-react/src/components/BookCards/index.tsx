import React from 'react';
import books from './books'
import { BooksDatas } from './books';
import './index.scss'

const BookCards: React.FC = () => {
    return (
        <div className='wrapper'>
            {books.map((item: BooksDatas) => (
                <div className="card" key={item.id}>
                    <img className='card__image' src={item.image} alt="" />
                    <h2 className='card__title center'>{item.title}</h2>
                    <h6 className='card__subtitle'> {item.author} </h6>
                    <p className='card__desc'> {item.description} </p>
                    <button className='card__btn center'> {item.genre} </button>
                    <p className='card__text center'> {item.published} </p>
                </div>
            ))}
        </div>
    )
}
export default BookCards;