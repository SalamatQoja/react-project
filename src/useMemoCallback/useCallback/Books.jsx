// Napishite prilojenuye dlya otobrajeniye spiska knig v bibiogteka.Kajdiy kniga imeet nazvaniye avtora i god izdaniye.Ispolzyute useMemo chtobi optimizirovat rendering spiska knig 

import React, { useState, useMemo } from 'react';

const booksData = [
    { id: 1, title: 'Voina i mir', author: 'Lev Tolstoy', year: 1869 },
    { id: 2, title: 'Prestuplenie i nakazanie', author: 'Fedor Dostoevsky', year: 1866 },
    { id: 3, title: 'Master i Margarita', author: 'Mikhail Bulgakov', year: 1967 },
    { id: 4, title: 'Anna Karenina', author: 'Lev Tolstoy', year: 1877 },
    { id: 5, title: 'Idiot', author: 'Fedor Dostoevsky', year: 1869 },
];

const BookList = () => {
    const [searchAuthor, setSearchAuthor] = useState('');

    const filteredBooks = useMemo(() => {
        console.log('Filtruyem knigi...');
        return booksData.filter((book) =>
            book.author.toLowerCase().includes(searchAuthor.toLowerCase())
        );
    }, [searchAuthor]);

    return (
        <div>
            <h2>Biblioteka: Spisok knig</h2>

            <input
                type="text"
                placeholder="Poisk po avtory..."
                value={searchAuthor}
                onChange={(e) => setSearchAuthor(e.target.value)}
            />

            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> — {book.author} ({book.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
