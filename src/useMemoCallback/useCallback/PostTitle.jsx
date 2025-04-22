// Napishite komponent dlya otobrajenye spiska postov na bloge.Kajdiy post imeet zagolovok i soderjanuye.Ispolzyute useMemo chtobi optimizirovat rendering spiska postov 

import React, { useState, useMemo } from 'react';

const postsData = [
    { id: 1, title: 'React useState', content: 'Opisanie useState...' },
    { id: 2, title: 'React useEffect', content: 'Opisanie useEffect...' },
    { id: 3, title: 'React useMemo', content: 'Opisanie useMemo...' },
    { id: 4, title: 'Context API', content: 'Opisanie context...' },
];

const BlogPosts = () => {
    const [search, setSearch] = useState('');

  
    const filteredPosts = useMemo(() => {
        console.log('Filtratsiya postov...');
        return postsData.filter(post =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div>
            <h2>Spisok blog-postov</h2>

            <input
                type="text"
                placeholder="Poisk po zagolovku..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredPosts.map((post) => (
                    <li key={post.id} style={{ marginBottom: '1rem' }}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPosts;