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
        setPosts(posts)
      })
  }

  const fetchMidia = () => {
    fetch('https://blog.coursify.me/wp-json/wp/v2/media')
      .then((response) => response.json()).then((media) => {
        setMedia(media);
        setLoading(false);
      })
  }

  useEffect(() => {
    fetchCategoriesNames()
    fetchCategoriesPosts();
    fetchMidia();
  }, []);

  const filterNameCres = (a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  const filterNameDesc = (a, b) => {
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  return(
    <div>
      {
        loading ? <h1>Loading . . .</h1> :
        <div>
          <select
            onChange={ ({ target: { value } }) => {
              if (value === 'textCres') {
                const newList = categories.sort(filterNameCres);
                setCategories(newList);
              } else if (value === 'textDesc') {
                const newList = categories.sort(filterNameDesc);
                setCategories(newList);
              }
            } }
          >
            <option value="padrao">Padrao</option>
            <option value="textCres">A-Z</option>
            <option value="textDesc">Z-A</option>
            <option value="viewDesc">mais visualizaçoes</option>
            <option value="viewCres">menos visualizacoes</option>
          </select>
          {
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
            </div>))
          }
        </div>
      }
    </div>
  )
}

export default Categories;