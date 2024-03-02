import './App.css'
import ilustrationArticle from './assets/images/illustration-article.svg'
import avatar from './assets/images/image-avatar.webp'

function App() {

  return (
    <article className='max-w-96 rounded-[20px] bg-white p-6 grid gap-y-6 font-figtree drop-shadow-inactive transition-all hover:drop-shadow-active'>
      <img className='rounded-[20px]' src={ilustrationArticle} alt="blog"/>
      <div className='flex flex-col gap-y-3'>
        <p className='font-figtree-extrabold text-xs px-3 py-1 bg-yellow rounded-[4px] self-start'>Learning</p>
        <p className='text-xs'>Published 21 Dec 2023</p>
        <h3 className='text-xl font-figtree-extrabold'>HTML & CSS foundations</h3>
        <p className='text-grey'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      </div>
      <div className='flex gap-x-3'>
        <img className='rounded-full size-8 object-cover' src={avatar} alt="avatar" />
        <p className='font-figtree-extrabold text-sm'>Greg Hooper</p>
      </div>
    </article>
  )
}

export default App
