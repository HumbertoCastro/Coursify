import React, { useState, useEffect } from 'react';
import CategoriesPosts from './CategoriesPosts';

function Categories() {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState([true]);

  const fetchCategoriesNames = () => {
    fetch('https://blog.coursify.me/wp-json/wp/v2/categories/')
      .then((response) => response.json()).then((jsonRes) => {
        console.log(jsonRes);
        setCategories(jsonRes);
      });
  }
  
  const fetchCategoriesPosts = () => {
    fetch('https://blog.coursify.me/wp-json/wp/v2/posts')
      .then((response) => response.json()).then((posts) => {
        console.log(posts);
        setPosts(posts)
      })
  }

  const fetchMidia = () => {
    fetch('https://blog.coursify.me/wp-json/wp/v2/media')
      .then((response) => response.json()).then((media) => {
        console.log(media);
        setMedia(media);
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchCategoriesNames()
    fetchCategoriesPosts();
    fetchMidia();
  }, []);

  return(
    <div>
      {
        loading ? <h1>Loading . . .</h1> : 
        categories.map((cat) => (
          <div className='section-page'>
            <a href={ cat.link } className='category-links'>
              {
                cat.name
              }
            </a>
            <section className='posts-section'>
              {
                posts.map((post, index) => (
                  <CategoriesPosts post={ post } media={ media[index] } />
                ))
              }
            </section>
          </div>
        ))
      }
    </div>
  )
}

export default Categories;