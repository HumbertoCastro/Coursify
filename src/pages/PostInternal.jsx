import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function PostInternal() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState([]);

  /*const changeParagrafo = () => {
    const paragrafo = document.querySelector('.paragrafo');
    paragrafo.innerHTML = post.content.rendered;
  } */

  const fetchPost = () => {
    fetch(`https://blog.coursify.me/wp-json/wp/v2/posts/${id}`)
      .then((response) => response.json()).then((postFetched) => {
        setPost(postFetched);
        setLoading(false);
        // changeParagrafo();
      })
  }

  const fetchMedia = () => {
    fetch(`https://blog.coursify.me/wp-json/wp/v2/media/${post.featured_media}`)
      .then((response) => response.json()).then((img) => {
        console.log(post)
        console.log(img);
        setMedia(img);
      })
  }

  useEffect(() => {
    fetchPost();
  }, [])

  useEffect(() => {
    fetchMedia();
  }, [post])

  const renderPage = () => {
    console.log(media);
    return(
      <div>
        <Header />
        <main>
          <h1 className='text-green'>{ post.title.rendered }</h1>
          <p className='paragrafo'>{ post.excerpt.rendered }</p>
          <img src={ media.source_url } alt='post-cover' />
          <p className='paragrafo'>{ post.excerpt.rendered }</p>
        </main>
        <Footer />
      </div>
    )
  }

  return(
    <div>
      {
        loading ? <h1>loading ...</h1> : renderPage()
      }
    </div>
  )
}

export default PostInternal;