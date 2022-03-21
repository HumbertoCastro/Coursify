import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoriesPosts({ post, media }) {
  const navigate = useNavigate();
  return(
    <div className='posts'>
      <button
        onClick={ () => {
          navigate(`post/${post.id}`);
        } }
      >
        <img className='midia-image' src={ media.source_url } alt='post-cover' />
        <span className='text-green'>{ post.title.rendered }</span>
        <p>
          {
            post.excerpt.rendered
          }
        </p>
        <span className='text-yellow'>Leia mais</span>
      </button>
    </div>
  )
}

export default CategoriesPosts;